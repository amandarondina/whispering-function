const input = document.getElementById("quote-input");
const result = document.getElementById("quote-result");

function whisper() {
  let quote = input.value;

  if (quote.endsWith("!")) {
    result.innerHTML = `shh... ${quote.toLowerCase().slice(0, -1)}`;
  } else {
    result.innerHTML = `shh... ${quote.toLowerCase()};`;
  }
}

async function copyContent() {
  try {
    await navigator.clipboard.writeText(result.innerHTML);
    alert("Content copied to clipboard");
    result.innerHTML = " ";
  } catch (err) {
    alert("Failed to copy: ", err);
  }
}
