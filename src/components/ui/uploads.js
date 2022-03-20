import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";

export default function Uploads(props) {
  const { attachFile, attachFiles, fileTp } = props;
  const [uploadFiles, setUploadFiles] = useState([{ file: "" }]);
  const [openModal, setOpenModal] = useState([]);
  const [isFirst, setIsFirst] = useState(true);
  const [deleteFile, setDeleteFile] = useState();

  useEffect(() => {
    if (attachFile && attachFile.seq) {
      setUploadFiles([{ file: attachFile }]);
    } else if (attachFiles) {
      let arr = [];
      _.forEach(attachFiles, (fileItem) => {
        arr.push({ file: fileItem });
      });

      setUploadFiles([...arr]);
    } else {
      setUploadFiles([{ file: "" }]);
    }
  }, [attachFile, attachFiles]);

  const handleFileUpload = (e, i) => {
    let file = e.target.files[0];

    console.log("file", file);
    console.log("fileTp", fileTp);

    let formData = new FormData();
    if (file && fileTp) {
      let fileNm = e.target.files[0].name;
      let ext = fileNm.substring(fileNm.lastIndexOf(".") + 1, fileNm.length);
      console.log("fileTp", fileTp);
      console.log("fileTp2");

      if (fileTp.includes(ext.toLowerCase()) === false) {
        handleOpenModal();
        return;
      }
    }

    let url = "";

    if (props.type == "IMAGE") {
      url = `/api/st/attach-image/upload?domain=image`;
      formData.append("image", e.target.files[0]);
    } else if (props.type == "FILE") {
      url = `/api/st/attach-file/upload?domain=file`;
      formData.append("file", e.target.files[0]);
    }

    axios
      .post(url, formData, {
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      })
      .then((res) => {
        setIsFirst(false);
        uploadFiles[i].file = res.data.data;
        setUploadFiles([...uploadFiles]);
      });
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddFileUpload = (e) => {
    setUploadFiles([...uploadFiles, { file: "" }]);
  };

  const handleRemoveFileUpload = (e, i) => {
    uploadFiles.splice(i, 1);

    setUploadFiles([...uploadFiles]);
  };

  const handleRemoveFile = (e, i) => {
    e.preventDefault();
    let deleted = JSON.parse(JSON.stringify(uploadFiles));
    setDeleteFile(deleted);

    uploadFiles[i].file = "";

    setUploadFiles([...uploadFiles]);
  };

  useEffect(() => {
    if (!isFirst || deleteFile) {
      props.onChange && props.onChange(uploadFiles);
    }
  }, [uploadFiles]);

  return (
    <>
      {uploadFiles.map((item, i) => (
        <div className="upload-file-wrap" key={i}>
          <div className="upload-file">
            <div className="upload-file-input">
              <TextField disabled value={item.file ? item.file.orgNm : ""} />
              {item.file && (
                <a
                  href="#"
                  className="btn-file-remove"
                  onClick={(e) => {
                    handleRemoveFile(e, i);
                  }}
                >
                  <CloseIcon fontSize="small" />
                </a>
              )}
            </div>
            <div>
              <Button variant="contained" component="label" color="primary">
                찾아보기
                <input
                  type="file"
                  hidden
                  onChange={(e) => {
                    handleFileUpload(e, i);
                  }}
                />
              </Button>
              {props.method === "MULTI" && (
                <>
                  {i == 0 && (
                    <Button
                      variant="contained"
                      component="label"
                      color="secondary"
                      onClick={handleAddFileUpload}
                    >
                      추가
                    </Button>
                  )}
                  {i > 0 && (
                    <Button
                      variant="contained"
                      component="label"
                      size="small"
                      color="secondary"
                      onClick={(e) => {
                        handleRemoveFileUpload(e, i);
                      }}
                    >
                      삭제
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* 잘못된 확장자 Alert Dialog */}
      <Dialog
        id="alert-dialog"
        fullWidth={true}
        open={openModal === true}
        className="alert-dialog"
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle id="customized-dialog-title">알림</DialogTitle>
        <DialogContent dividers>
          {fileTp && `${fileTp.join(", ")} 파일을 업로드 해주세요.`}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={handleCloseModal}
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
