import React, { useState, useEffect } from "react";
import { Field } from "formik";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { TextField } from "@material-ui/core";
import "./statics/css/customTextField.css";

const CustomTextField = ({
    name,
    dropdown = false,
    type,
    placeHolder,
    menuItems,
    addStyles,
    ...rest
}) => {
    const isDropdown = dropdown;
    const [option, setOption] = useState("");

    const handleChange = (e) => {
        setOption(e.target.value);
    };

    return !isDropdown ? (
        <>
            <Field name={name} {...rest}>
                {({ field, form: { touched, errors }, meta }) => (
                    <div>
                        <input
                            type={type}
                            placeholder={placeHolder}
                            className={addStyles}
                            {...rest}
                            {...field}
                        />
                        {meta.touched && meta.error && (
                            <div className="error">{meta.error}</div>
                        )}
                    </div>
                )}
            </Field>
        </>
    ) : (
        <>
            <Field name={name} {...rest}>
                {({ field, form, meta }) => (
                    <>
                        <TextField
                            label={placeHolder}
                            name={name}
                            select
                            placeholder={placeHolder}
                            margin="normal"
                            fullWidth
                            {...rest}
                            {...field}
                        >
                            <MenuItem key={""} value={""}>
                                None
                            </MenuItem>
                            {menuItems.map((item, index) => (
                                <MenuItem key={index} value={item.value}>
                                    {item.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        {meta.touched && meta.error && (
                            <div className="error">{meta.error}</div>
                        )}
                    </>
                )}
            </Field>
        </>
    );
};

export default CustomTextField;
