import deepdash from "deepdash";
import lodash from "lodash";
const _ = deepdash(lodash);

let mockVodList = [
  {
    seq: "1",
    name: "cdntest",
    files: [
      {
        name: "Display_vantage1.mp4(cdntest)",
        size: "2010",
        seq: "vod1",
      },
      {
        name: "Display_vantage2.mp4(cdntest)",
        size: "2010",
        seq: "vod2",
      },
    ],
    children: [
      {
        seq: "11",
        name: "cdntest2",
        files: [
          {
            name: "Display_vantage1.mp4(cdntest2)",
            size: "2010",
            seq: "vod3",
          },
          {
            name: "Display_vantage2.mp4(cdntest2)",
            size: "2010",
            seq: "vod4",
          },
        ],
      },
      {
        seq: "12",
        name: "cdntest3",
        files: [
          {
            name: "Display_vantage1.mp4(cdntest3)",
            size: "2010",
            seq: "vod5",
          },
          {
            name: "Display_vantage2.mp4(cdntest3)",
            size: "2010",
            seq: "vod6",
          },
        ],
      },
    ],
  },
  {
    seq: "2",
    name: "instrument",
    files: [
      {
        name: "Display_vantage1.mp4(instrument)",
        size: "2010",
        seq: "vod7",
      },
      {
        name: "Display_vantage2.mp4(instrument)",
        size: "2010",
        seq: "vod8",
      },
    ],
    children: [
      {
        seq: "21",
        name: "instrument2",
        files: [
          {
            name: "Display_vantage1.mp4(instrument2)",
            size: "2010",
            seq: "vod9",
          },
          {
            name: "Display_vantage2.mp4(instrument2)",
            size: "2010",
            seq: "vod10",
          },
        ],
      },
      {
        seq: "22",
        name: "instrument3",
        files: [
          {
            name: "Display_vantage1.mp4(instrument3)",
            size: "2010",
            seq: "vod11",
          },
          {
            name: "Display_vantage2.mp4(instrument3)",
            size: "2010",
            seq: "vod12",
          },
        ],
      },
    ],
  },
  {
    seq: "3",
    name: "interview",
    files: [
      {
        name: "Display_vantage1.mp4(interview)",
        size: "2010",
        seq: "vod13",
      },
      {
        name: "Display_vantage2.mp4(interview)",
        size: "2010",
        seq: "vod14",
      },
    ],
    children: [
      {
        seq: "31",
        name: "interview2",
        files: [
          {
            name: "Display_vantage1.mp4(interview2)",
            size: "2010",
            seq: "vod15",
          },
          {
            name: "Display_vantage2.mp4(interview2)",
            size: "2010",
            seq: "vod16",
          },
        ],
      },
      {
        seq: "32",
        name: "interview3",
        files: [
          {
            name: "Display_vantage1.mp4(interview3)",
            size: "2010",
            seq: "vod17",
          },
          {
            name: "Display_vantage2.mp4(interview3)",
            size: "2010",
            seq: "vod18",
          },
        ],
      },
    ],
  },
];

const initialState = {
  vodList: [],
  selectFolder: {
    seq1: "",
    seq2: "",
  },
  selectVod: "",
  addFile: {
    seq: "",
    name: "",
    size: "",
  },
  selectCategory: {},
};

/* 영상 검색 카테리 선택 */
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const selectCategoryAction = (data) => ({
  type: SELECT_CATEGORY,
  payload: {
    selectCategory: data,
  },
});

/* 영상 목록 불러오기 */
export const LOAD_VOD = "LOAD_VOD";
export const loadVodAction = (data) => ({
  type: LOAD_VOD,
});

/* 영상 목록 불러오기 성공 */
export const LOAD_VOD_SUCCESS = "LOAD_VOD_SUCCESS";
export const loadVodSuccessAction = (data) => ({
  type: LOAD_VOD_SUCCESS,
  payload: {
    vodList: data,
  },
});

/* 영상 폴더 선택 */
export const SELECT_FOLDER = "SELECT_FOLDER";
export const selectFolderAction = (data) => ({
  type: SELECT_FOLDER,
  payload: {
    selectFolder: data,
  },
});

/* 영상 폴더 삭제 */
export const DELETE_FOLDER = "DELETE_FOLDER";
export const deleteFolderAction = (data) => ({
  type: DELETE_FOLDER,
  payload: {
    seq: data,
  },
});

/* 영상 폴더 삭제 성공 */
export const DELETE_FOLDER_SUCCESS = "DELETE_FOLDER_SUCCESS";
export const deleteFolderSuccessAction = (data) => ({
  type: DELETE_FOLDER_SUCCESS,
  payload: {
    seq: data,
  },
});

/* 영상 삭제 */
export const DELETE_VOD = "DELETE_VOD";
export const deleteVodAction = (data) => ({
  type: DELETE_VOD,
  payload: {
    seq: data,
  },
});

/* 영상 추가 */
export const ADD_VOD = "ADD_VOD";
export const addVodAction = (data) => ({
  type: ADD_VOD,
  payload: {
    file: data,
  },
});

/* 영상 추가 성공 */
export const ADD_VOD_SUCCESS = "ADD_VOD_SUCCESS";
export const addVodSuccessAction = (data) => ({
  type: ADD_VOD_SUCCESS,
  payload: {
    file: data,
  },
});

/* 영상 선택 */
export const SELECT_VOD = "SELECT_VOD";
export const selectVodAction = (data) => ({
  type: SELECT_VOD,
  payload: {
    seq: data,
  },
});

/* 영상 선택 성공 */
export const SELECT_VOD_SUCCESS = "SELECT_VOD_SUCCESS";
export const selectVodSuccessAction = (data) => ({
  type: SELECT_VOD_SUCCESS,
  payload: {
    seq: data,
  },
});

/* 영상 선택 삭제 */
export const DELETE_SELECT_VOD = "DELETE_SELECT_VOD";
export const deleteSelectVodAction = (data) => ({
  type: DELETE_SELECT_VOD,
});

export default function videoManagementReducer(state = initialState, action) {
  const { type, payload, error } = action;

  console.log("videoManagementReducer", type, "payload", payload);

  switch (type) {
    case SELECT_CATEGORY:
      state.selectCategory[payload.selectCategory.parent.cd] = {
        select: [...payload.selectCategory.newValue],
      };
      return {
        ...state,
        selectCategory: { ...state.selectCategory },
      };
    case LOAD_VOD:
      return {
        ...state,
      };
    case LOAD_VOD_SUCCESS:
      return {
        ...state,
        vodList: mockVodList,
      };
    case SELECT_FOLDER:
      return {
        ...state,
        selectFolder: { ...payload.selectFolder },
      };
    case DELETE_VOD:
      let deleteVodList = [];

      _.forEach(mockVodList, (vod) => {
        const vodChildren = [];
        _.forEach(vod.children, (child) => {
          let filteredData = _.filterDeep(
            child,
            (item, key, parentValue, context) => item.seq != payload.seq,
            {
              childrenPath: "files",
            }
          );
          vodChildren.push(filteredData);
        });
        vod.children = [...vodChildren];

        let filteredData = _.filterDeep(
          vod,
          (item, key, parentValue, context) => item.seq != payload.seq,
          {
            childrenPath: "files",
          }
        );
        deleteVodList.push(filteredData);
      });

      mockVodList = [...deleteVodList];

      return {
        ...state,
        vodList: mockVodList,
      };
    case ADD_VOD:
      return {
        ...state,
      };
    case ADD_VOD_SUCCESS:
      let filteredData = _.findDeep(
        mockVodList,
        (item, key, parentValue, context) => item.seq == payload.file.parentSeq,
        {
          childrenPath: "children",
        }
      );
      filteredData.value.files.push(payload.file);

      return {
        ...state,
      };
    case SELECT_VOD:
      return {
        ...state,
      };
    case SELECT_VOD_SUCCESS:
      return {
        ...state,
        selectVod: payload.seq,
      };
    case DELETE_FOLDER:
      return {
        ...state,
      };
    case DELETE_FOLDER_SUCCESS:
      let deleteFilter = _.filter(mockVodList, (item) => {
        return item.seq != payload.seq;
      });

      let deleteFilterChild = _.filterDeep(
        deleteFilter,
        (item, key, parentValue, context) => {
          return item.seq != payload.seq;
        },
        {
          childrenPath: "children",
          includeRoot: false,
        }
      );

      mockVodList = deleteFilterChild ? [...deleteFilterChild] : [];

      return {
        ...state,
        vodList: mockVodList,
      };
    case DELETE_SELECT_VOD:
      return {
        ...state,
        selectVod: "",
      };
    default:
      return state;
  }
}
