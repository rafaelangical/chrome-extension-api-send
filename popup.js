document.addEventListener(
  "DOMContentLoaded",
  function() {
    var checkPageButton = document.getElementById("clickIt");
    checkPageButton.addEventListener(
      "click",
      function() {
        chrome.tabs.getSelected(null, function(tab) {
          const name = getElementByXpath(
            "/html/body/div/section[2]/div/div/div[2]/div/div/div/form/div[1]/div/input"
          ).value;

          const phone = getElementByXpath(
            "/html/body/div/section[2]/div/div/div[2]/div/div/div/form/div[2]/div[1]/input"
          ).value;
          const maskPhone = value
            .replace("(", "")
            .replace(")", "")
            .replace(" ", "")
            .replace("-", "");
          chrome.tabs.create({
            url: `http://fastzap.site/api/enviar/?token=424ac10e11d17ae6cb2b386fbec5a64d6eea787c&mensagem=Olá ${name}&telefone=55${maskPhone}`
          });
        });
      },
      false
    );
  },
  false
);
