import {
  Checkbox,
  Chip,
  FormControlLabel,
  makeStyles,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  selectedCategory: {
    "& .MuiChip-root": {
      padding: "0 5px",
      margin: "4px 0 4px 4px",
    },
  },
  category: {
    width: "100%",
    height: "200px",
    overflow: "auto",
  },
  tree: {
    flexGrow: 1,
    "& .MuiTreeItem-label": {
      "padding-left": "11px",
      "& .MuiCheckbox-root": {
        "padding-right": "6px",
      },
    },
  },
}));

export default function CategoryTreeView(props) {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, submitCount },
    control,
    clearErrors,
    setValue,
    getValues,
    reset,
  } = useForm({});

  const [selTreeItem, setSelTreeItem] = useState([]);

  useEffect(() => {
    console.log("props.selCatgList", props.selCatgList);
    setTreeByList(props.selCatgList);
  }, []);

  const setTreeByList = (categoryList) => {
    console.log("categoryList", categoryList);
    console.log("props.categoryList", props.categoryList);

    for (let i in categoryList) {
      _.eachDeep(
        props.categoryList,
        (value, key, parent) => {
          if (value.nm === categoryList[i].nm)
            handleOnChange(parent, true, value);
        },
        { childrenPath: "subCodeList" }
      );
    }
  };

  const getChildByCd = (node, cd) => {
    let array = [];

    function getAllChild(nodes) {
      if (nodes === null) return [];
      array.push(nodes);
      if (Array.isArray(nodes.subCodeList)) {
        nodes.subCodeList.forEach((node) => {
          array = [...array, ...getAllChild(node)];
          array = array.filter((v, i) => array.indexOf(v) === i);
        });
      }

      return array;
    }

    const getNodeByCd = (nodes, cd) => {
      if (nodes.cd === cd) {
        return nodes;
      } else if (Array.isArray(nodes.subCodeList)) {
        let result = null;
        nodes.subCodeList.forEach((node) => {
          if (!!getNodeByCd(node, cd)) {
            result = getNodeByCd(node, cd);
          }
        });
        return result;
      }

      return null;
    };
    return getAllChild(getNodeByCd(node, cd));
  };

  useEffect(() => {
    console.log("selTreeItem", selTreeItem);

    let selTreeItem1 = selTreeItem.filter((item) => {
      return !item.subCodeList;
    });

    props.getCatgList(selTreeItem);
  }, [selTreeItem]);

  const handleOnChange = (all, checked, nodes) => {
    const allNode = getChildByCd(all, nodes.cd);

    let array = [...props.selCatgList];

    if (checked) {
      const temp = props.selCatgList.filter((item) => {
        return _.findIndex(allNode, ["cd", item.cd]) === -1;
      });

      array = [...temp, ...allNode];
    } else {
      array = props.selCatgList.filter((item) => {
        return _.findIndex(allNode, ["cd", item.cd]) === -1;
      });
    }

    console.log("arrayzzx", array);

    setSelTreeItem(array, { shouldValidate: true });
  };

  const renderTree = (allNode, nodes) => {
    return (
      <TreeItem
        key={nodes.cd}
        nodeId={nodes.cd}
        label={
          <FormControlLabel
            label={nodes.nm}
            control={
              <>
                {!nodes.subCodeList && (
                  <>
                    <Checkbox
                      checked={props.selCatgList.some((item) => {
                        return item.cd === nodes.cd;
                      })}
                      value={nodes.cd}
                      color="primary"
                      icon={<span className="checkbox-icon" />}
                      checkedIcon={<span className="checkbox-icon-checked" />}
                      onChange={(e) => {
                        handleOnChange(allNode, e.currentTarget.checked, nodes);
                      }}
                    />
                  </>
                )}
              </>
            }
          />
        }
      >
        {Array.isArray(nodes.subCodeList)
          ? nodes.subCodeList.map((node) => renderTree(allNode, node))
          : null}
      </TreeItem>
    );
  };

  return (
    <>
      {props.selCatgList.length > 0 && (
        <div className={classes.selectedCategory}>
          {props.selCatgList.map((item) => {
            return (
              <Chip
                size="small"
                color="primary"
                key={item.cd}
                label={item.nm}
              />
            );
          })}
        </div>
      )}

      {props.categoryList.map((item) => {
        return (
          <TreeView
            className={classes.tree}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpanded={["root"]}
            defaultExpandIcon={<ChevronRightIcon />}
            key={item.cd}
          >
            {renderTree(item, item)}
          </TreeView>
        );
      })}
    </>
  );
}
