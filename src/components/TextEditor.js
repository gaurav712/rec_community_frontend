import "../stylesheets/TextEditor.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function TextEditor({ textEditorHtml, handleEditorHtmlChange }) {
  var theme = "snow";
  var placeholder = "Enter text here";

  var modules = {
    toolbar: [
      [
        { font: [] },
        "bold",
        "italic",
        "underline",
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        "link",
        "clean"
      ]
    ]
  };

  return (
    <div className="editor">
      <ReactQuill
        theme={theme}
        onChange={handleEditorHtmlChange}
        value={textEditorHtml}
        modules={modules}
        bounds={".editor"}
        placeholder={placeholder}
      />
    </div>
  );
}
