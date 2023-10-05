const editor = document.getElementById('editor');
const preview = document.getElementById('preview');

// Default markdown content for the editor
const defaultMarkdown = `
# This is a heading (H1)
## This is a sub-heading (H2)
[Visit Google](https://www.google.com)
Here is some inline code: \`<div></div>\`
\`\`\`
// This is a code block
const hello = "Hello, World!";
console.log(hello);
\`\`\`
- This is a list item
> This is a blockquote
![Google Logo](https://www.google.fr/images/srpr/logo3w.png)
**This is bolded text**
`;

editor.value = defaultMarkdown;
preview.innerHTML = marked(editor.value);

editor.addEventListener('input', function () {
  preview.innerHTML = marked(editor.value);
});