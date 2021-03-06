// [] MUST MANUALLY EDIT wID field for bookmarklet
(function newBackLink_0_4(wID = '"_wID_"', top = '_top_', name = '"_name_"') {

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
  // [] Add support for notes
  const parent = convertWidToItem(wID);
  if (!parent) return void toastMsg("Parent location is not valid.", 3, true);

  const IS_MOBILE = navigator.userAgent.includes("Mobile");
  const focus = IS_MOBILE ? WF.currentItem() : WF.focusedItem();
  if (!focus) return void toastMsg("No item with cursor focus found", 3, true);
  if (IS_MOBILE && focus.equals(WF.rootItem())) return void toastMsg("You must zoom into the item on mobile.", 3, true);
  const matchBrackets = str => str.match(/(\[\[)(.*)(\]\])/);
  const origName = focus.getName();
  const bracketMatch = matchBrackets(origName); //gets only first match!
  if (!bracketMatch) return void toastMsg("No square brackets found.", 3, true);
  const pty = top ? 0 : parent.getChildren().length;
  const newNode = WF.createItem(parent, pty);
  WF.setItemName(newNode, bracketMatch[2]);

  // update original bullet
  const createItemLink = item => `<a href=\"https://workflowy.com${item.getUrl()}\">${item.getName()}</a>`;
  const newName = origName.replace(bracketMatch[0], createItemLink(newNode));
  WF.setItemName(focus, newName);

  // [] support selected text if no brackets found
  // const selectedText = window.getSelection().toString().trim();
  // if (selectedText.length === 0) return void toastMsg("No selected text detected.", 3, true);
  // will need to escape for selected text
  // const htmlEscTextForContent = str => str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/\u00A0/g, " ");
})();