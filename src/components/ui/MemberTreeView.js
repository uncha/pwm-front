import { Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FolderRoundedIcon from "@material-ui/icons/FolderRounded";
import { TreeItem, TreeView } from "@material-ui/lab";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  tree: {
    flexGrow: 1,
    "& .MuiTreeItem-label": {
      "padding-left": "8px !important",
      "& .MuiCheckbox-root": {
        "padding-right": "6px",
      },
    },
    "& .treeLabel": {
      "& .MuiTypography-root": {
        "padding-left": "8px",
      },
    },
  },
}));

export default function MemberTreeView(props) {
  const classes = useStyles();

  const { selectedList, changeResultData, allTreeList } = props;

  const [treeList, setTreeList] = useState({
    seq: "0",
    nm: "주식회사 씨젠",
    childrens: [],
    members: [],
    checked: false,
    expand: true,
  });

  const [selectedMemberList, setSelectedMemberList] = useState(
    selectedList ? selectedList : []
  );
  const [loaded, setLoaded] = useState(true);
  const [valid, setValid] = useState(false);

  const setTreeByList = (categoryList) => {
    categoryList.map((item) => {
      _.eachDeep(
        item,
        (value, key, parent) => {
          value.checked = false;
          value.expand = false;

          value.members.map((child) => {
            child.checked = false;
            child.expand = false;
            selectedMemberList.map((list) => {
              if (list.seq === child.seq) {
                child.checked = true;
              }
            });
          });
        },
        { childrenPath: "childrens" }
      );
    });

    setTreeList((prev) => ({
      ...prev,
      childrens: categoryList,
    }));
  };

  useEffect(() => {
    setTreeByList(allTreeList);
  }, [allTreeList]);

  useEffect(() => {
    if (selectedList) {
      setSelectedMemberList(selectedList);
      setLoaded(true);
    }
  }, [selectedList]);

  useEffect(() => {
    if (loaded && treeList.childrens.length > 0) {
      let list = JSON.parse(JSON.stringify(treeList));

      list.childrens.map((item) => {
        _.eachDeep(
          item,
          (value, key, parent) => {
            value.members.map((child) => {
              child.checked = false;

              selectedMemberList.map((list) => {
                if (list.seq === child.seq) {
                  child.checked = true;
                }
              });
            });
          },
          { childrenPath: "childrens" }
        );
      });

      checkParent(list);
      deCheckParent(list);

      setTreeList(list);
      setLoaded(false);
    }
  }, [treeList, loaded]);

  if (treeList.childrens.length == 0) return <></>;

  const renderTree = (nodes) => {
    return (
      <TreeItem
        key={nodes.seq}
        nodeId={String(nodes.seq)}
        collapseIcon={
          nodes.childrens.length > 0 || nodes.members.length > 0 ? (
            <ExpandMoreIcon />
          ) : (
            ""
          )
        }
        expandIcon={
          nodes.childrens.length > 0 || nodes.members.length > 0 ? (
            <ChevronRightIcon />
          ) : (
            ""
          )
        }
        onIconClick={(e) => {
          handleExpand(nodes);
        }}
        onLabelClick={(e) => {
          handleExpand(nodes);
        }}
        label={
          <>
            <FormControlLabel
              className="treeLabel"
              label={nodes.nm}
              onClick={(e) => {
                e.stopPropagation();
              }}
              control={
                <>
                  <Checkbox
                    checked={nodes.checked}
                    value={nodes.checked}
                    color="primary"
                    icon={<span className="checkbox-icon" />}
                    checkedIcon={<span className="checkbox-icon-checked" />}
                    onChange={(e) => {
                      handleOnChange(e.currentTarget.checked, nodes);
                    }}
                  />
                  {nodes.expand ? (
                    <FolderOpenRoundedIcon />
                  ) : (
                    <FolderRoundedIcon />
                  )}
                </>
              }
            />
          </>
        }
      >
        {nodes.members &&
          nodes.members.length > 0 &&
          nodes.members.map((item, i) => (
            <TreeItem
              className="treeLabel"
              key={item.seq}
              nodeId={item.seq}
              label={
                <>
                  <FormControlLabel
                    label={`${item.fstNm} ${item.lstNm} (${item.email})`}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    control={
                      <>
                        <Checkbox
                          checked={item.checked}
                          value={item.seq}
                          color="primary"
                          icon={<span className="checkbox-icon" />}
                          checkedIcon={
                            <span className="checkbox-icon-checked" />
                          }
                          onChange={(e) => {
                            handleOnChange(e.currentTarget.checked, item);
                          }}
                        />
                        <AccountBoxRoundedIcon />
                      </>
                    }
                  />
                </>
              }
            />
          ))}

        {Array.isArray(nodes.childrens)
          ? nodes.childrens.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  };

  const checkParent = (list, nodes) => {
    list.childrens.map((item) => {
      checkParent(item);
    });

    let filter = list;

    if (!filter) {
      return list;
    }

    let filterChild = filter.childrens.find((item) => item.checked === false);

    let filterMember = filter.members.find((item) => item.checked === false);

    if (!filterChild && !filterMember) {
      if (filter.childrens.length > 0 || filter.members.length > 0) {
        filter.checked = true;
      }
    }
    return list;
  };

  const deCheckParent = (list, nodes) => {
    list.childrens.map((item) => {
      deCheckParent(item);
    });

    let filter = list;

    if (!filter) {
      return list;
    }

    let filterChild = filter.childrens.find((item) => item.checked === false);

    let filterMember = filter.members.find((item) => item.checked === false);

    if (filterChild || filterMember) {
      if (filter.childrens.length > 0 || filter.members.length > 0) {
        filter.checked = false;
      }
    }

    return list;
  };

  const handleOnChange = (checked, nodes) => {
    let arr = JSON.parse(JSON.stringify(selectedMemberList));
    let allList = JSON.parse(JSON.stringify(treeList));
    let selected = JSON.parse(JSON.stringify(nodes));

    if (checked) {
      // checkParent(allList, selected);
      if (nodes) {
        let findClick;
        if (nodes.childrens && nodes.members) {
          findClick = _.findDeep(allList, (item) => item.seq === nodes.seq, {
            childrenPath: "childrens",
          }).value;

          _.eachDeep(
            findClick,
            (value, key, parent, ctx) => {
              let result;

              if (value.members && value.members.length > 0) {
                value.members.map((item, i) => {
                  item.checked = true;
                });

                result = value.members.every((itm) => itm.checked);
              } else if (value.childrens && value.childrens.length > 0) {
                value.childrens.map((item, i) => {
                  item.checked = true;
                });

                result = value.childrens.every((itm) => itm.checked);
              } else {
                result = true;
              }

              value.checked = true;
            },
            { childrenPath: "childrens" }
          );
        } else {
          let filter = _.findDeep(
            allList,
            (item) => {
              return item.members.find((itm) => itm.seq === nodes.seq);
            },
            { childrenPath: "childrens" }
          ).value;

          findClick = filter.members.find((item) => item.seq === nodes.seq);

          findClick.checked = true;
        }
      }

      // 체크한 항목들 비교해서 추출
      if (nodes.childrens && nodes.members) {
        _.eachDeep(
          nodes,
          (item) => {
            item.members.map((itm) => {
              let isInc = arr.some((child) => {
                return child.seq === itm.seq;
              });

              if (!isInc) {
                arr.push(itm);
              }
            });
          },
          { childrenPath: "childrens" }
        );
      } else {
        arr.push(nodes);
      }
    } else {
      if (nodes) {
        let findClick;
        if (nodes.childrens && nodes.members) {
          findClick = _.findDeep(allList, (item) => item.seq === nodes.seq, {
            childrenPath: "childrens",
          }).value;

          _.eachDeep(
            findClick,
            (value, key, parent) => {
              let result;

              if (value.members && value.members.length > 0) {
                value.members.map((item, i) => {
                  item.checked = false;
                });

                result = value.members.every((itm) => !itm.checked);
              } else if (value.childrens && value.childrens.length > 0) {
                value.childrens.map((item, i) => {
                  item.checked = false;
                });

                result = value.childrens.every((itm) => !itm.checked);
              } else {
                result = true;
              }

              value.checked = false;
            },
            { childrenPath: "childrens" }
          );
        } else {
          let filter = _.findDeep(
            allList,
            (item) => {
              return item.members.find((itm) => itm.seq === nodes.seq);
            },
            { childrenPath: "childrens" }
          ).value;

          findClick = filter.members.find((item) => item.seq === nodes.seq);

          findClick.checked = false;
        }
      }

      // 체크해제한 항목들 비교해서 추출
      if (nodes.childrens && nodes.members) {
        _.eachDeep(
          nodes,
          (item) => {
            item.members.map((itm) => {
              _.remove(arr, (child) => child.seq == itm.seq);
            });
          },
          { childrenPath: "childrens" }
        );
      } else {
        _.remove(arr, (child) => child.seq == nodes.seq);
      }
    }

    setTreeList(allList);
    setSelectedMemberList(arr);
    if (props.changeResultData) {
      props.changeResultData(arr);
    }
  };

  const handleExpand = (nodes) => {
    if (nodes.childrens.length == 0 && nodes.members.length == 0) {
      return;
    }

    let list = JSON.parse(JSON.stringify(treeList));
    let filter = _.findDeep(
      list,
      (item) => {
        return item.seq === nodes.seq;
      },
      { childrenPath: "childrens" }
    ).value;

    if (filter.expand === true) {
      filter.expand = false;
    } else {
      filter.expand = true;
    }

    setTreeList(list);
  };

  return (
    <>
      <TreeView className={classes.tree} defaultExpanded={["0"]}>
        {renderTree(treeList)}
      </TreeView>
    </>
  );
}
