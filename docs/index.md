# New Backlink Creator for WorkFlowy
- Create new backlinks when the bullet does not exist.
- Install as a bookmarklet in a browser, or as a WFx shortcut.
- Defaults to creating new bullets at the top of your home page.
- Option: Customize the new bullet location. 
- Only supports linking in bullet names, no note support.

## To USE
- Use WorkFlowy's standard [[Link Creator]]
- Define the new node name between the brackets.
- Activate the bookmarklet or WFx shortcut.
- A new bullet will be created in the new bullet location.
- The existing brackets and name will be converted into a link to the new bullet. 

## Installation: Drag this link to your bookmarks bar: (See below for WFx install)

<!-- Special #setup editing instrucions go here -->
 <a href="javascript:(function newBackLink_0_1(wID=&quot;&quot;){function toastMsg(str,sec,err){WF.showMessage(str,err);setTimeout(WF.hideMessage,(sec||2)*1e3)}function convertWidToItem(str,homeNotOption){const match=str.match(/[a-f0-9]{12}/);if(match)return WF.getItemById(WF.shortIdToId(match[0]));return!homeNotOption&amp;&amp;str===&quot;&quot;?WF.rootItem():null}const parent=convertWidToItem(wID);if(!parent)return void toastMsg(&quot;Parent location is not valid.&quot;,3,true);const focus=WF.focusedItem();if(!focus)return void toastMsg(&quot;No item with cursor focus found&quot;,3,true);const matchBrackets=str=&gt;str.match(/(\[\[)(.*)(\]\])/);const origName=focus.getName();const bracketMatch=matchBrackets(origName);if(!bracketMatch)return void toastMsg(&quot;No square brackets found.&quot;,3,true);const newNode=WF.createItem(parent,0);WF.setItemName(newNode,bracketMatch[2]);const createItemLink=item=&gt;`&lt;a href=&quot;https://workflowy.com${item.getUrl()}&quot;&gt;${item.getName()}&lt;/a&gt;`;const newName=origName.replace(bracketMatch[0],createItemLink(newNode));WF.setItemName(focus,newName)})();">newBackLink</a>

## Customize the Bookmarklet New Bullet Location
- In WorkFlowy, "Copy internal link" of your parent node. 
- Make sure your parent node is not an embedded share or a mirror!
- Right click the bookmarklet, and select "Edit".
- In the URL field, scroll to the beginning of the URL/bookmarklet code.
- Paste your link between the double quotes here: `(wID="")`
- Press SAVE

## Install as WFx Shortcut
- Right click the newBackLink bookmarklet above, and click "Copy link address".
- Open WFx Options via **wfo**
- Click ADD JAVASCRIPT
- Paste the code you copied into the JAVASCRIPT field
- Define the NAME and SHORTCUT
- To customize the location, copy JUST the 12 character ID from the node URL
- Make sure your parent node is not an embedded share or a mirror!
- **DO NOT PASTE THE ENTIRE URL!!**  
- Press SAVE


## Version Notes:
- v0.1 (2021-08-14): Initial release

<!-- 
LINKS REFERENCING THIS

Move xtras.text info here if necessary
 -->
