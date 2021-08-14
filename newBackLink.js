// only acts on first brackets found
// only supports name field, not notes
// (function newBackLink_0_1(wID = '"_wID_"', top = '_top_') {
(function newBackLink_0_1(wID = "https://workflowy.com/#/c1efb3184277", top = '_top_') {

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
  const parent = convertWidToItem(wID);
  if (!parent) return void toastMsg("Parent location is not valid.", 3, true);

  // [] support brackets 
  // [] find bracketed text
  const focus = WF.focusedItem();
  if (!focus) return void toastMsg("No item with cursor focus found", 3, true);
  // [] support selected text if no brackets found
  // const selectedText = window.getSelection().toString().trim();
  // if (selectedText.length === 0) return void toastMsg("No selected text detected.", 3, true);

  const htmlEscTextForContent = str => str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/\u00A0/g, " ");

  WF.createItem(WF.currentItem(), 0)
  WF.setItemName(item, htmlEscTextForContent(str))
  window.getSelection().toString()
})();