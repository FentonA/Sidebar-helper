chrome.runtime.onInstalled.addListener(() => {

})

//test implementation of bookmark
chrome.bookmarks.onCreated.addListener(()=>{
	alert("Bookmark have been saved")
})