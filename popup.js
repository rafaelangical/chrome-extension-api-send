// chrome.tabs.create({ url: "http://google.com" });
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  var activeTab = tabs[0];
  console.log("Current tab", activeTab);
  console.log("Current window", activeTab);
});
window.addEventListener(
  "DOMContentLoaded",
  function() {
    const checkPageButton = document.getElementById("clickIt");
    checkPageButton.addEventListener(
      "click",
      function() {
        chrome.tabs.getSelected(null, function(tab) {
          console.log(tab);
          console.log(document.evalute);
          function getElementByXpath(path) {
            return document.evaluate(
              path,
              document,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null
            ).singleNodeValue;
          }
          const name = getElementByXpath(
            "/html/body/div/section[2]/div/div/div[2]/div/div/div/form/div[1]/div/input"
          );

          console.log(name);
          const phone = getElementByXpath(
            "/html/body/div/section[2]/div/div/div[2]/div/div/div/form/div[1]/div/input"
          );
          console.log(phone);
          const maskPhone =
            phone &&
            phone.value
              .replace("(", "")
              .replace(")", "")
              .replace(" ", "")
              .replace("-", "");

          chrome.tabs.create({
            url: `http://fastzap.site/api/enviar/?token=424ac10e11d17ae6cb2b386fbec5a64d6eea787c&mensagem=Ola rafael&telefone=558695713097`
          });
        });
      },
      false
    );
  },
  false
);
