var selected_element = null;

function handleTextSelection() {
  var selectedText = '';
  var wordIndices = [];
    console.log("handleTextSelection");
    if (window.getSelection) {
        var selection = window.getSelection();
        console.log("selection", selection);
      
        var element = selection.anchorNode.parentElement;
        console.log(element);
        element.style.border = "solid 2px blue";
        //    = "border: solid 2px blue;";
    }
    // selectedText = selection.toString();
    // var range = selection.getRangeAt(0);
    // var startNode = range.startContainer;
    // var endNode = range.endContainer;
    // var startOffset = range.startOffset;
    // var endOffset = range.endOffset;

    // // Traverse start node to find first selected word index
    // var wordIndex = 0;
    // var currentNode = startNode;
    // while (currentNode && currentNode.nodeType === Node.TEXT_NODE) {
    //   if (currentNode === startNode) {
    //     wordIndex += startOffset;
    //   } else {
    //     wordIndex += currentNode.length;
    //   }
    //   currentNode = currentNode.previousSibling;
    // }
    // var startIndex = wordIndex;

    // // Traverse end node to find last selected word index
    // wordIndex = 0;
    // currentNode = endNode;
    // while (currentNode && currentNode.nodeType === Node.TEXT_NODE) {
    //   if (currentNode === endNode) {
    //     wordIndex += endOffset;
    //   } else {
    //     wordIndex += currentNode.length;
    //   }
    //   currentNode = currentNode.previousSibling;
    // }
    // var endIndex = wordIndex;

    // // Extract word indices within the selected text
    // var words = selectedText.split(/\s+/);
    // var currentWordIndex = startIndex;
    // words.forEach(function (word) {
    //   var wordStartIndex = currentWordIndex;
    //   var wordEndIndex = currentWordIndex + word.length - 1;
    //   wordIndices.push({ word: word, start: wordStartIndex, end: wordEndIndex });
    //   currentWordIndex += word.length + 1; // +1 for whitespace
    // });
//   }

//   console.log('Selected Text:', selectedText);
//   console.log('Word Indices:', wordIndices);
}

document.addEventListener('mouseup', handleTextSelection);
document.addEventListener('keyup', handleTextSelection);
