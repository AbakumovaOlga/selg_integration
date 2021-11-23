function NodeListToArray(nl) {
    var array = []
    for (var i = 0; i < nl.size(); i++) {
        array[i] = nl.get(i).getText().replace(/\(00\)/g, '');
    }
    return array;
}

function getID(mc) {
	 var payload = mc.getPayloadXML();
	 var txt_xpath = "//id";
	 var res_xpath = mc.getXpathResult(txt_xpath);
	 var nodeList = res_xpath.selectNodes(payload);
    mc.setProperty("id_from_js",NodeListToArray(nodeList).toString());
}

//Функция для генерации GUID
function GUID() {
	  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	    return v.toString(16);	    	    	    
	  });
	}



function getGUID(mc) {
   mc.setProperty("guid_from_js",GUID());
}