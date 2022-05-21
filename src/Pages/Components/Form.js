import React from "react";
import InputDate from "../../Shared/Components/Input/InputDate";
import InputSelect from "../../Shared/Components/Input/InputSelect";
import InputText from "../../Shared/Components/Input/InputText";
import TextArea from "../../Shared/Components/Input/TextArea";
import { convertToYMD } from "../../Shared/Helpers/DateFormat";

export default function Form({ selectedTodo, actionType }) {
  return (
    <>
      <form>
        <InputText
          defaultValue={selectedTodo.title}
          label="Title"
          onChange={(e) => {
            selectedTodo.title = e.target.value;
          }}
        />
        <TextArea
          label="Decription"
          defaultValue={selectedTodo.description}
          onChange={(e) => {
            selectedTodo.description = e.target.value;
          }}
        ></TextArea>
        {actionType === "detail" && (
          <InputSelect
            label="Status"
            defaultValue={selectedTodo.status}
            onChange={(e) => {
              selectedTodo.status = Number(e.target.value);
            }}
          />
        )}
        {actionType === "detail" && (
          <InputDate
            label="Date"
            defaultValue={convertToYMD(selectedTodo.createdAt)}
            onChange={(e) => {
              selectedTodo.createdAt = convertToYMD(e.target.value);
            }}
          />
        )}
      </form>
    </>
  );
}
