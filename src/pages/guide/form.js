import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import CustomLocale from "customLocale"; //datepicker locale 기본설정
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function GuideForm() {
  const gender = ["male", "female", "both"];
  const fruits = ["Apple", "Orange", "Melon", "Grape"];

  // radio/checkbox state
  const [radioValue, setRadioValue] = useState("");
  const [checkValue, setCheckValue] = useState("");

  // selectBox state
  const [selectValue, setSelectValue] = useState("");
  const [selectValue2, setSelectValue2] = useState("");

  // validation 변수
  const {
    register,
    handleSubmit,
    formState: { errors, submitCount },
  } = useForm({});

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({});

  const {
    register: register3,
    handleSubmit: handleSubmit3,
    control: control3,
    formState: { errors: errors3 },
  } = useForm({});

  const {
    register: register4,
    handleSubmit: handleSubmit4,

    control,
    formState: { errors: errors4 },
  } = useForm({});

  const {
    register: register5,
    handleSubmit: handleSubmit5,

    control: control2,
    formState: { errors: errors5 },
  } = useForm({});

  const {
    handleSubmit: handleSubmit6,
    control: control4,
    watch,
    formState: { errors: errors6 },
  } = useForm({});

  const onSubmit = (data) => {
    alert("??");
    console.log("data", data);
  };

  const onBlur = (e) => {
    console.log(submitCount);
  };

  // select onChange 이벤트
  const changeMenu = (e) => {
    console.log("event", e.target);
    setSelectValue2(e.target.value);
    switch (e.target.name) {
      case "select1":
        setSelectValue(e.target.value);
        break;
      case "select2":
        setSelectValue2(e.target.value);
        break;
      default:
        return;
    }
  };

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div id="main">
      <div className="container">
        <h2 style={{ "text-align": "center" }}>Form</h2>
        {/* Radio */}
        <Card style={{ marginTop: "50px" }}>
          <CardHeader
            title="Radio"
            style={{
              "background-color": "rgba(0, 0, 0, 0.03)",
            }}
          />
          <CardContent>
            <p>Radio Group</p>
            <Box mt={2}>
              <form>
                <FormControl component="fieldset">
                  <FormLabel component="legend" focused={false}>
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="male"
                  >
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio
                          color="primary"
                          icon={<span className="radio-icon" />}
                          checkedIcon={<span className="radio-icon-checked" />}
                        />
                      }
                      label="male"
                    />
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio
                          color="primary"
                          icon={<span className="radio-icon" />}
                          checkedIcon={<span className="radio-icon-checked" />}
                        />
                      }
                      label="female"
                    />
                    <FormControlLabel
                      disabled
                      value="both"
                      control={
                        <Radio
                          color="primary"
                          icon={<span className="radio-icon" />}
                          checkedIcon={<span className="radio-icon-checked" />}
                        />
                      }
                      label="both"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                  <FormLabel component="legend" focused={false}>
                    Gender(Radio using Map)
                  </FormLabel>
                  <RadioGroup aria-label="gender" defaultValue="male">
                    {gender.map((item) => (
                      <FormControlLabel
                        disabled={item === "both"}
                        value={item}
                        control={
                          <Radio
                            color="primary"
                            icon={<span className="radio-icon" />}
                            checkedIcon={
                              <span className="radio-icon-checked" />
                            }
                          />
                        }
                        label={item}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
                <hr />
                {/* radio disabled */}
                <FormControl component="fieldset">
                  <FormLabel component="legend" focused={false}>
                    Gender(disabled)
                  </FormLabel>
                  <RadioGroup aria-label="gender" defaultValue="male">
                    {gender.map((item) => (
                      <FormControlLabel
                        // checked={item === "both"}
                        disabled
                        value={item}
                        control={
                          <Radio
                            color="primary"
                            icon={<span className="radio-icon" />}
                            checkedIcon={
                              <span className="radio-icon-checked" />
                            }
                          />
                        }
                        label={item}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </form>
            </Box>
            <hr />
            {/* radio group validation */}
            <form onSubmit={handleSubmit4(onSubmit)}>
              <p>Radio Group Validation</p>
              <Controller
                rules={{
                  required: true,
                }}
                defaultValue=""
                name="radioValid"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="disp"
                      name="radioValid"
                      row
                      value={value}
                      onChange={onChange}
                    >
                      <FormControlLabel
                        value="male"
                        control={
                          <Radio
                            size="small"
                            color="primary"
                            icon={<span className="radio-icon" />}
                            checkedIcon={
                              <span className="radio-icon-checked" />
                            }
                          />
                        }
                        label="male"
                      />
                      <FormControlLabel
                        value="female"
                        control={
                          <Radio
                            size="small"
                            color="primary"
                            icon={<span className="radio-icon" />}
                            checkedIcon={
                              <span className="radio-icon-checked" />
                            }
                          />
                        }
                        label="female"
                      />
                    </RadioGroup>
                    {errors4.radioValid?.type === "required" && (
                      <FormHelperText className="text-primary">
                        value is required
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />

              <div>
                <Button
                  size="small"
                  type="submit"
                  color="primary"
                  variant="outlined"
                >
                  submit
                </Button>
              </div>
            </form>
            <hr />

            {/* radio group row */}
            <p>Radio Group Row</p>
            <Box mt={2}>
              <form className="input-form">
                <FormControl component="fieldset">
                  <FormLabel component="legend" focused={false}>
                    Gender
                  </FormLabel>
                  <RadioGroup aria-label="gender" row defaultValue="both">
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio
                          color="primary"
                          icon={<span className="radio-icon" />}
                          checkedIcon={<span className="radio-icon-checked" />}
                        />
                      }
                      label="male"
                      color="primary"
                    />
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio
                          color="primary"
                          icon={<span className="radio-icon" />}
                          checkedIcon={<span className="radio-icon-checked" />}
                        />
                      }
                      label="female"
                    />
                    <FormControlLabel
                      value="both"
                      control={
                        <Radio
                          color="primary"
                          icon={<span className="radio-icon" />}
                          checkedIcon={<span className="radio-icon-checked" />}
                        />
                      }
                      label="both"
                    />
                  </RadioGroup>
                </FormControl>
              </form>
            </Box>
          </CardContent>
        </Card>
        {/* checkbox */}
        <Card style={{ marginTop: "50px" }}>
          <CardHeader
            title="Checkbox"
            style={{
              "background-color": "rgba(0, 0, 0, 0.03)",
            }}
          />
          <CardContent>
            <p>CheckBox Group</p>
            <Box mt={2}>
              <form>
                <FormControl component="fieldset">
                  <FormLabel focused={false}>Fruits</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      value="Apple"
                      control={
                        <Checkbox
                          defaultChecked
                          color="primary"
                          icon={<span className="checkbox-icon" />}
                          checkedIcon={
                            <span className="checkbox-icon-checked" />
                          }
                        />
                      }
                      label="Apple"
                    />
                    <FormControlLabel
                      value="Orange"
                      control={
                        <Checkbox
                          color="primary"
                          icon={<span className="checkbox-icon" />}
                          checkedIcon={
                            <span className="checkbox-icon-checked" />
                          }
                        />
                      }
                      label="Orange"
                    />
                    <FormControlLabel
                      value="Melon"
                      control={
                        <Checkbox
                          color="primary"
                          icon={<span className="checkbox-icon" />}
                          checkedIcon={
                            <span className="checkbox-icon-checked" />
                          }
                        />
                      }
                      label="Melon"
                    />
                    <FormControlLabel
                      value="Grape"
                      control={
                        <Checkbox
                          color="primary"
                          icon={<span className="checkbox-icon" />}
                          checkedIcon={
                            <span className="checkbox-icon-checked" />
                          }
                        />
                      }
                      label="Grape"
                    />
                  </FormGroup>
                </FormControl>

                {/* checkbox using map */}
                <FormControl component="fieldset">
                  <FormLabel focused={false}>
                    Fruits (checkbox using Map)
                  </FormLabel>
                  <FormGroup>
                    {fruits.map((item) => (
                      <FormControlLabel
                        value={item}
                        control={
                          <Checkbox
                            defaultChecked={item === "Apple"}
                            color="primary"
                            icon={<span className="checkbox-icon" />}
                            checkedIcon={
                              <span className="checkbox-icon-checked" />
                            }
                          />
                        }
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
                <hr />
                {/* checkbox disabled */}
                <FormControl component="fieldset">
                  <FormLabel focused={false}>
                    Fruits (checkbox using Map)
                  </FormLabel>
                  <FormGroup defaultValue="Orange">
                    {fruits.map((item) => (
                      <FormControlLabel
                        disabled
                        value={item}
                        control={
                          <Checkbox
                            defaultChecked={item === "Apple"}
                            color="primary"
                            icon={<span className="checkbox-icon" />}
                            checkedIcon={
                              <span className="checkbox-icon-checked" />
                            }
                          />
                        }
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </form>
              <hr />
              {/* Checkbox Validation */}
              <p>CheckBox Validation</p>
              <form onSubmit={handleSubmit5(onSubmit)}>
                <Controller
                  rules={{
                    required: true,
                  }}
                  defaultValue=""
                  name="checkValid"
                  control={control2}
                  render={({ field: { onChange, value } }) => (
                    <FormControl component="fieldset">
                      <FormGroup
                        row
                        name="checkValid"
                        value={value}
                        onChange={onChange}
                      >
                        <FormControlLabel
                          value="Apple"
                          control={
                            <Checkbox
                              color="primary"
                              icon={<span className="checkbox-icon" />}
                              checkedIcon={
                                <span className="checkbox-icon-checked" />
                              }
                            />
                          }
                          label="Apple"
                        />
                        <FormControlLabel
                          value="Orange"
                          control={
                            <Checkbox
                              color="primary"
                              icon={<span className="checkbox-icon" />}
                              checkedIcon={
                                <span className="checkbox-icon-checked" />
                              }
                            />
                          }
                          label="Orange"
                        />
                        <FormControlLabel
                          value="Melon"
                          control={
                            <Checkbox
                              color="primary"
                              icon={<span className="checkbox-icon" />}
                              checkedIcon={
                                <span className="checkbox-icon-checked" />
                              }
                            />
                          }
                          label="Melon"
                        />
                        <FormControlLabel
                          value="Grape"
                          control={
                            <Checkbox
                              color="primary"
                              icon={<span className="checkbox-icon" />}
                              checkedIcon={
                                <span className="checkbox-icon-checked" />
                              }
                            />
                          }
                          label="Grape"
                        />
                      </FormGroup>
                      {errors5.checkValid?.type === "required" && (
                        <FormHelperText className="text-primary">
                          value is required
                        </FormHelperText>
                      )}
                    </FormControl>
                  )}
                />
                <div>
                  <Button
                    size="small"
                    type="submit"
                    color="primary"
                    variant="outlined"
                  >
                    submit
                  </Button>
                </div>
              </form>
              <hr />
              {/* checkbox group row */}
              <p>Checkbox Group Row</p>
              <Box mt={2}>
                <form>
                  <FormControl component="fieldset">
                    <FormLabel focused={false}>Fruits</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        value="Apple"
                        control={
                          <Checkbox
                            color="primary"
                            icon={<span className="checkbox-icon" />}
                            checkedIcon={
                              <span className="checkbox-icon-checked" />
                            }
                          />
                        }
                        label="Apple"
                      />
                      <FormControlLabel
                        value="Orange"
                        control={
                          <Checkbox
                            color="primary"
                            icon={<span className="checkbox-icon" />}
                            checkedIcon={
                              <span className="checkbox-icon-checked" />
                            }
                          />
                        }
                        label="Orange"
                      />
                      <FormControlLabel
                        value="Melon"
                        control={
                          <Checkbox
                            color="primary"
                            icon={<span className="checkbox-icon" />}
                            checkedIcon={
                              <span className="checkbox-icon-checked" />
                            }
                          />
                        }
                        label="Melon"
                      />
                      <FormControlLabel
                        value="Grape"
                        control={
                          <Checkbox
                            color="primary"
                            icon={<span className="checkbox-icon" />}
                            checkedIcon={
                              <span className="checkbox-icon-checked" />
                            }
                          />
                        }
                        label="Grape"
                      />
                    </FormGroup>
                  </FormControl>
                </form>
              </Box>
              <hr />
              {/* checkbox single */}
              <Box>
                <form>
                  <FormControl component="fieldset">
                    <FormControlLabel
                      value={true}
                      label="I am willing to receive an information message."
                      control={
                        <Checkbox
                          color="primary"
                          icon={<span className="checkbox-icon" />}
                          checkedIcon={
                            <span className="checkbox-icon-checked" />
                          }
                        />
                      }
                    />
                  </FormControl>
                </form>
              </Box>
            </Box>
          </CardContent>
        </Card>
        {/* input */}
        <Card style={{ marginTop: "50px" }}>
          <CardHeader
            title="Input"
            style={{
              "background-color": "rgba(0, 0, 0, 0.03)",
            }}
          />
          <CardContent>
            {/* Input Basic*/}
            <p>Input Basic</p>
            <Box mt={2}>
              <form className="input-form">
                <Input id="input1" placeholder="Please enter in email format" />

                <Select
                  name="select1"
                  inputProps={{
                    className: [!selectValue && "select-placeholder"],
                  }}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 30,
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                  displayEmpty
                  value={selectValue}
                  onChange={changeMenu}
                >
                  <MenuItem value="" style={{ display: "none" }}>
                    Select Number
                  </MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>

                <Input id="input1" placeholder="Please enter in email format" />

                <Select
                  name="select1"
                  inputProps={{
                    className: [!selectValue && "select-placeholder"],
                  }}
                  MenuProps={{
                    anchorOrigin: {
                      vertical: 30,
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                  displayEmpty
                  value={selectValue}
                  onChange={changeMenu}
                >
                  <MenuItem value="" style={{ display: "none" }}>
                    Select Number
                  </MenuItem>
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
                <DatePicker
                  value={startDate}
                  onChange={setStartDate}
                  inputPlaceholder="Select Date"
                  wrapperClassName="custom-datepicker"
                  formatInputText={() => {
                    return CustomLocale.formatInputText(startDate);
                  }}
                  locale={CustomLocale}
                />
                <hr />
                <table className="form-table">
                  <tbody>
                    <tr>
                      <th scope="row">
                        <InputLabel htmlFor="input1">E-mail(ID)</InputLabel>
                      </th>
                      <td>
                        <Input
                          fullWidth
                          id="input1"
                          placeholder="Please enter in email format"
                        />
                      </td>
                      <th scope="row">
                        <InputLabel htmlFor="input2">
                          Confirm E-mail(ID)
                        </InputLabel>
                      </th>
                      <td>
                        <Input
                          fullWidth
                          id="input2"
                          placeholder="Please enter in email format"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <InputLabel htmlFor="input">SoloTable</InputLabel>
                      </th>
                      <td>
                        <Input fullWidth id="input" placeholder="Testing..." />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </Box>
            <hr />

            {/* Input Required */}
            <p>Input Required</p>
            <Box mt={2}>
              <form
                onBlur={onBlur}
                onSubmit={handleSubmit(onSubmit)}
                className="input-form"
              >
                <table className="form-table">
                  <tbody>
                    <tr>
                      <th scope="row">
                        <InputLabel required htmlFor="input3">
                          E-mail(ID)
                        </InputLabel>
                      </th>
                      <td>
                        <Input
                          inputProps={{
                            className: [
                              errors.email && "border-danger",
                              !errors.email &&
                                submitCount > 0 &&
                                "valid-confirm",
                            ],
                          }}
                          {...register("email", {
                            required: true,
                            minLength: 3,
                          })}
                          fullWidth
                          id="input3"
                          placeholder="Please enter in email format"
                        />
                        {errors.email && (
                          <FormHelperText color="primary">
                            Please enter at least two characters.
                          </FormHelperText>
                        )}
                      </td>
                      <th scope="row">
                        <InputLabel required htmlFor="input4">
                          Confirm E-mail(ID)
                        </InputLabel>
                      </th>
                      <td>
                        <Input
                          inputProps={{
                            className: [
                              errors.confirmEmail && "border-danger",
                              !errors.confirmEmail &&
                                submitCount > 0 &&
                                "valid-confirm",
                            ],
                          }}
                          {...register("confirmEmail", {
                            required: true,
                          })}
                          fullWidth
                          id="input4"
                          placeholder="Please enter in email format"
                        />
                        {errors.confirmEmail && (
                          <FormHelperText color="primary">
                            Not match.
                          </FormHelperText>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <InputLabel required htmlFor="input5">
                          SoloTable
                        </InputLabel>
                      </th>
                      <td>
                        <Input
                          inputProps={{
                            className: [
                              errors.soloTable && "border-danger",
                              !errors.soloTable &&
                                submitCount > 0 &&
                                "valid-confirm",
                            ],
                          }}
                          {...register("soloTable", {
                            required: true,
                            minLength: 3,
                          })}
                          fullWidth
                          id="input5"
                          placeholder="Testing..."
                        />
                        {errors.soloTable && (
                          <FormHelperText color="primary">
                            I'm Validation Message
                          </FormHelperText>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <Button
                  size="small"
                  type="submit"
                  color="primary"
                  variant="outlined"
                >
                  submit
                </Button>
              </form>
            </Box>
            <hr />
            {/* Input Rounded */}
            <div style={{ background: "#A6ACA8", padding: "20px 10px" }}>
              <p>Input Rounded</p>
              <Box mt={2}>
                <form className="input-form">
                  <FormControl className="rounded-wrap" fullWidth>
                    <Input
                      inputProps={{
                        className: "MuiInput-input-rounded",
                      }}
                      fullWidth
                      id="input5"
                      placeholder="ID"
                    />
                  </FormControl>
                  <FormControl className="rounded-wrap" fullWidth>
                    <Input
                      inputProps={{ className: "MuiInput-input-rounded" }}
                      fullWidth
                      id="input6"
                      type="password"
                      placeholder="PW"
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    fullWidth
                    className="MuiButton-rounded"
                    color="primary"
                    variant="contained"
                  >
                    LOGIN
                  </Button>
                </form>
              </Box>
            </div>
          </CardContent>
        </Card>
        {/* Textarea */}
        <Card style={{ marginTop: "50px" }}>
          <CardHeader
            title="Textarea"
            style={{
              "background-color": "rgba(0, 0, 0, 0.03)",
            }}
          />
          <CardContent>
            <p>Textarea Basic</p>
            <Box mt={2}>
              <form onSubmit={handleSubmit2(onSubmit)}>
                <TextField
                  inputProps={{
                    className: errors2.textfield && "border-danger",
                  }}
                  {...register2("textfield", {
                    required: true,
                    maxLength: 20,
                  })}
                  multiline
                  maxRows={8}
                  minRows={2}
                  fullWidth
                  placeholder="Text area
                  What marketing or promotional opportunities shall I be expecting when writing the application?"
                />
                {errors2.textfield && (
                  <FormHelperText color="primary">
                    The number of characters that can be entered has been
                    exceeded.
                  </FormHelperText>
                )}
                <Button
                  size="small"
                  type="submit"
                  color="primary"
                  variant="outlined"
                >
                  submit
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
        {/* SelectBox */}
        <Card style={{ marginTop: "50px" }}>
          <CardHeader
            title="SelectBox"
            style={{
              "background-color": "rgba(0, 0, 0, 0.03)",
            }}
          />
          <CardContent>
            <p>SelectBox Basic</p>
            <Box mt={2}>
              <form className="input-form" onSubmit={handleSubmit3(onSubmit)}>
                <table className="form-table">
                  <tbody>
                    <tr>
                      <th scope="row">
                        <InputLabel htmlFor="select1">E-mail(ID)</InputLabel>
                      </th>
                      <td>
                        <Select
                          name="select1"
                          inputProps={{
                            className: [!selectValue && "select-placeholder"],
                          }}
                          MenuProps={{
                            anchorOrigin: {
                              vertical: 30,
                              horizontal: "left",
                            },
                            transformOrigin: {
                              vertical: "top",
                              horizontal: "left",
                            },
                            getContentAnchorEl: null,
                          }}
                          fullWidth
                          displayEmpty
                          value={selectValue}
                          onChange={changeMenu}
                        >
                          <MenuItem value="" style={{ display: "none" }}>
                            Select Number
                          </MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                        </Select>
                      </td>
                      <th scope="row">
                        <InputLabel htmlFor="select1">E-mail(ID)</InputLabel>
                      </th>
                      <td>
                        <Select
                          disabled
                          inputProps={{
                            className: [!selectValue && "select-placeholder"],
                          }}
                          MenuProps={{
                            anchorOrigin: {
                              vertical: 30,
                              horizontal: "left",
                            },
                            transformOrigin: {
                              vertical: "top",
                              horizontal: "left",
                            },
                            getContentAnchorEl: null,
                          }}
                          fullWidth
                          displayEmpty
                          value={selectValue}
                          onChange={changeMenu}
                        >
                          <MenuItem value="" style={{ display: "none" }}>
                            Select Number
                          </MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                        </Select>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <InputLabel htmlFor="select1">E-mail(ID)</InputLabel>
                      </th>
                      <td>
                        <Select
                          disabled
                          inputProps={{
                            className: [!selectValue && "select-placeholder"],
                          }}
                          MenuProps={{
                            anchorOrigin: {
                              vertical: 30,
                              horizontal: "left",
                            },
                            transformOrigin: {
                              vertical: "top",
                              horizontal: "left",
                            },
                            getContentAnchorEl: null,
                          }}
                          fullWidth
                          displayEmpty
                          value={selectValue}
                          onChange={changeMenu}
                        >
                          <MenuItem value="" style={{ display: "none" }}>
                            Select Number
                          </MenuItem>
                          <MenuItem value="1">1</MenuItem>
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="3">3</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                        </Select>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </Box>
            <hr />
            {/* selectBox required */}
            <p>SelectBox Required</p>
            <Box mt={2}>
              <form className="input-form" onSubmit={handleSubmit3(onSubmit)}>
                <table className="form-table">
                  <tbody>
                    <tr>
                      <th>
                        <InputLabel required htmlFor="select2">
                          E-mail(ID)
                        </InputLabel>
                      </th>
                      <td>
                        <Controller
                          rules={{
                            required: true,
                          }}
                          defaultValue=""
                          name="selectValid"
                          control={control3}
                          render={({ field: { onChange, value } }) => (
                            <div>
                              <Select
                                name="selectValid"
                                value={value}
                                onChange={onChange}
                                inputProps={{
                                  className: [
                                    errors3.selectValid && "border-danger",
                                    !value && "select-placeholder",
                                  ],
                                }}
                                MenuProps={{
                                  color: "primary",
                                  anchorOrigin: {
                                    vertical: 30,
                                    horizontal: "left",
                                  },
                                  transformOrigin: {
                                    vertical: "top",
                                    horizontal: "left",
                                  },
                                  getContentAnchorEl: null,
                                }}
                                fullWidth
                                displayEmpty
                              >
                                <MenuItem value="" style={{ display: "none" }}>
                                  Select Number
                                </MenuItem>
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="4">4</MenuItem>
                              </Select>
                              {errors3.selectValid && (
                                <FormHelperText color="primary">
                                  You must select Menu.
                                </FormHelperText>
                              )}
                            </div>
                          )}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <Button
                  size="small"
                  type="submit"
                  color="primary"
                  variant="outlined"
                >
                  submit
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
        {/* datePicker */}
        <Card style={{ marginTop: "50px" }}>
          <CardHeader
            title="DatePicker"
            style={{
              "background-color": "rgba(0, 0, 0, 0.03)",
            }}
          />
          <CardContent>
            <p>DatePicker Single FullWidth</p>
            <Box mt={2}>
              <DatePicker
                wrapperClassName="width-100"
                value={startDate}
                onChange={setStartDate}
                inputPlaceholder="Select Date"
                formatInputText={() => {
                  return CustomLocale.formatInputText(startDate);
                }}
                locale={CustomLocale}
              />
            </Box>
            <hr />
            <p>DatePicker Single w-auto</p>
            <Box mt={2}>
              <DatePicker
                value={startDate}
                onChange={setStartDate}
                inputPlaceholder="Select Date"
                wrapperClassName="custom-datepicker"
                formatInputText={() => {
                  return CustomLocale.formatInputText(startDate);
                }}
                locale={CustomLocale}
              />
            </Box>
            <hr />
            <p>DatePicker Double FullWidth</p>
            <Box mt={2}>
              <div className="datepicker-group">
                <DatePicker
                  wrapperClassName="width-100"
                  value={startDate}
                  onChange={setStartDate}
                  maximumDate={endDate}
                  inputPlaceholder="Select Date"
                  formatInputText={() => {
                    return CustomLocale.formatInputText(startDate);
                  }}
                  locale={CustomLocale}
                />
                <DatePicker
                  wrapperClassName="width-100"
                  value={endDate}
                  onChange={setEndDate}
                  minimumDate={startDate}
                  inputPlaceholder="Select Date"
                  formatInputText={() => {
                    return CustomLocale.formatInputText(endDate);
                  }}
                  locale={CustomLocale}
                />
              </div>
            </Box>
            <hr />
            <p>DatePicker Double w-auto</p>
            <Box mt={2}>
              <div className="datepicker-group">
                <DatePicker
                  value={startDate}
                  onChange={setStartDate}
                  maximumDate={endDate}
                  inputPlaceholder="Select Date"
                  wrapperClassName="custom-datepicker"
                  formatInputText={() => {
                    return CustomLocale.formatInputText(startDate);
                  }}
                  locale={CustomLocale}
                />
                <DatePicker
                  value={endDate}
                  onChange={setEndDate}
                  minimumDate={startDate}
                  inputPlaceholder="Select Date"
                  wrapperClassName="custom-datepicker"
                  formatInputText={() => {
                    return CustomLocale.formatInputText(endDate);
                  }}
                  locale={CustomLocale}
                />
              </div>
            </Box>
            <hr />
            <p>DatePicker Validation</p>
            <Box mt={2}>
              <form onSubmit={handleSubmit6(onSubmit)}>
                <div className="datepicker-group">
                  <Controller
                    rules={{
                      required: true,
                    }}
                    name="startValid"
                    control={control4}
                    render={({ field }) => (
                      <div>
                        <div>
                          <DatePicker
                            {...field}
                            maximumDate={watch("endValid")}
                            inputPlaceholder="Select Date"
                            inputClassName={
                              errors6.startValid && "border-danger"
                            }
                            wrapperClassName="custom-datepicker"
                            formatInputText={() => {
                              return CustomLocale.formatInputText(field.value);
                            }}
                            locale={CustomLocale}
                          />
                        </div>
                        {errors6.startValid && (
                          <FormHelperText color="primary">
                            You must select Date.
                          </FormHelperText>
                        )}
                      </div>
                    )}
                  />
                  <Controller
                    rules={{
                      required: true,
                    }}
                    name="endValid"
                    control={control4}
                    render={({ field }) => (
                      <div>
                        <div>
                          <DatePicker
                            {...field}
                            minimumDate={watch("startValid")}
                            inputPlaceholder="Select Date"
                            inputClassName={errors6.endValid && "border-danger"}
                            wrapperClassName="custom-datepicker"
                            formatInputText={() => {
                              return CustomLocale.formatInputText(field.value);
                            }}
                            locale={CustomLocale}
                          />
                        </div>
                        {errors6.endValid && (
                          <FormHelperText color="primary">
                            You must select Date.
                          </FormHelperText>
                        )}
                      </div>
                    )}
                  />
                </div>

                <Button
                  size="small"
                  type="submit"
                  color="primary"
                  variant="outlined"
                >
                  submit
                </Button>
              </form>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default GuideForm;
