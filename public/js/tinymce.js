tinymce.init({
  selector: "#serviceDescription",
  apiKey: "68ig7ixv8x5wcfkmmv2fod17zy042hl4qba8p5ngvavyjie5",
  plugins: [
    "advlist lists link autolink autosave code",
    "preview",
    "searchreplace",
    "wordcount",
    "media table emoticons image imagetools",
  ],
  toolbar:
    "undo redo | styleselect | fontselect | fontsizeselect | bold italic underline | alignLeft alignCenter alignRight alignJustify | bullist numlist outdent indent | link | foreColor backcolor emoticons | preview table",
  height: 300,
  setup: (editor) => {
    editor.on("change", function () {
      tinymce.triggerSave();
    });
  },
});
