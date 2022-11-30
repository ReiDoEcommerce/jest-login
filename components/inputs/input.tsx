import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { useField } from "@unform/core";

import * as S from "./styles";

const ReactInputMask = dynamic(() => import("react-input-mask"), {
  ssr: false,
});


interface Props {
  id?: string;
  name: string;
  labelAnimation?: string;
  label?: string;
  edit?: boolean;
  type: string;
  mask?: string;
  placeholder?: string;
  onChangeInput?: React.Dispatch<string>;
}

interface Props {
  name: string;
  label?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & Props;

export function InputComponent({
  id,
  name,
  labelAnimation,
  edit,
  type,
  mask,
  label,
  onChangeInput,
  ...rest
}: InputProps) {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || value,
      path: "value",
    });
  }, [fieldName, value, registerField]);

  return (
    <S.Input>
      <div className="input-content" >
        {mask ? (
          <>
            {label && (
              <label
                className="label-text paragraph-2-bold-graphie"
                htmlFor={id}
              >
                {label}
              </label>
            )}
            <ReactInputMask
              mask={mask}
              onChange={(e) => {
                setValue(e.target.value);

                if (onChangeInput) {
                  onChangeInput(e.target.value);
                }
              }}
              value={value}
            >
              {() => (
                <input
                  className="paragraph-1-bold-graphie"
                  id={id}
                  defaultValue={defaultValue}
                  ref={inputRef}
                  type={
                    type === "password" && !showPassword
                      ? "password"
                      : type === "password"
                      ? "text"
                      : type
                  }
                  name={name}
                  {...rest}
                />
              )}
            </ReactInputMask>
          </>
        ) : (
          <>
            {label && (
              <label
                className="label-text paragraph-2-bold-graphie"
                htmlFor={id}
              >
                {label}
              </label>
            )}

            <input
              id={id}
              defaultValue={defaultValue}
              ref={inputRef}
              name={name}
              type={
                type === "password" && !showPassword
                  ? "password"
                  : type === "password"
                  ? "text"
                  : type
              }
              {...rest}
              className="paragraph-1-bold-graphie"
              onChange={(e) => {
                if (labelAnimation) {
                  setValue(e.target.value);
                }
              }}
            />
          </>
        )}

        {labelAnimation && (
          <label
            htmlFor={id}
            className={`label-animation paragraph-1-bold-graphie ${
              value.length > 0 && "active"
            }`}
            onClick={() => {
              inputRef.current?.focus();
            }}
          >
            {labelAnimation}
          </label>
        )}

        {type === "password" && (
          <button
            type="button"
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="password eye"
          >
            {!showPassword ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"
                ></path>
                <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
              </svg>
            )}
          </button>
        )}
      </div>

      {error && (
        <span className="error paragraph-3-bold-graphie error-message" data-testid={"error-" + name}>
          {error}
        </span>
      )}
    </S.Input>
  );
}
