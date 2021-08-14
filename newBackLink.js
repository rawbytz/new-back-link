// only acts on first brackets found
// only supports name field, not notes
(function newBackLink_0_1(wID = '"_wID_"') {

  // [] add: , top = '_top_'

  if (typeof top !== "boolean") top = true;

  function toastMsg(str, sec, err) {
    WF.showMessage(str, err);
    setTimeout(WF.hideMessage, (sec || 2) * 1000);
  }

  function convertWidToItem(str, homeNotOption) {
    const match = str.match((/[a-f0-9]{12}/));
    if (match) return WF.getItemById(WF.shortIdToId(match[0]));
    return !homeNotOption && str === "" ? WF.rootItem() : null;
  }
  // [] add mirror check
  // [] add embed check
  const parent = convertWidToItem(wID);
  if (!parent) return void toastMsg("Parent location is not valid.", 3, true);

  const focus = WF.focusedItem();
  if (!focus) return void toastMsg("No item with cursor focus found", 3, true);
  const matchBrackets = str => str.match(/(\[\[)(.*)(\]\])/);
  const origName = focus.getName();
  const bracketMatch = matchBrackets(origName); //gets only first match!
  if (!bracketMatch) return void toastMsg("No square brackets found.", 3, true);
  const newNode = WF.createItem(parent, 0); // [] add support for top/bottom
  WF.setItemName(newNode, bracketMatch[2]);

  // update original bullet
  const createItemLink = item => `<a href=\"https://workflowy.com${item.getUrl()}\">${item.getName()}</a>`;  // [] quotes needed?
  const newName = origName.replace(bracketMatch[0], createItemLink(newNode));
  WF.setItemName(focus, newName);

  // [] support selected text if no brackets found
  // const selectedText = window.getSelection().toString().trim();
  // if (selectedText.length === 0) return void toastMsg("No selected text detected.", 3, true);
  // will need to escape for selected text
  // const htmlEscTextForContent = str => str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/\u00A0/g, " ");

})();