(function(window, undefined) {
  var dictionary = {
    "e9d4e694-a97f-4357-89db-ddb0630724f4": "Change_Password",
    "eef392f0-eb36-4492-8f74-f30f762900b7": "Send_Otp",
    "1c880d0a-2a12-47be-a032-5b70b9b43e6f": "MyOrder_Detail_Complete_Seller_Confirmation",
    "c3cc3b6a-3a26-4f5c-8f20-5c99fe12aad7": "Create Account",
    "bde2d8b4-31ea-46ee-a34b-0221b9ee5258": "My_OrderDetail_Partial_Seller_Confirmation",
    "5be40f46-f728-4af3-ba8b-d53605c27350": "Product_Detail",
    "7530deba-da4b-4ff3-926a-d5318f19305c": "My_Order_Detail",
    "d493934c-590c-4732-8997-885ee902c7d0": "Final_Confirmation",
    "489542ef-7199-4816-ac8f-d066c9c32a9d": "MyOrders",
    "c7bd2408-c095-4c63-b566-8efa16650e05": "Login",
    "fc03f113-4e4a-4edf-8784-9ed1f3f1afcf": "Header With Search",
    "ce3cfd45-e549-4347-a6c2-00647b486000": "MyProfile",
    "46bf6b56-f71d-473c-a7e9-e5cc4202746d": "Side Bar",
    "d233632e-2aae-48f7-bd8d-4cfbb6ac5a31": "CartPage",
    "21eca645-ff26-41e2-b03c-5bc78602095d": "Checkout",
    "9b3e4d7c-3225-490e-89da-80354db3e024": "Add New Address",
    "fa4d070d-ed7d-44c4-ac8c-2d7c03325c5c": "Product_List",
    "6f2c6acb-9f6b-453b-bf92-f43e0b41819f": "Update Address",
    "77a9adcb-d7be-44d3-bd3b-299fda9c1255": "ProductList_with_Filter",
    "ae82eeee-d140-436d-b917-60757591492b": "MyAddresses",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Header",
    "133ba5b7-0472-4406-af49-8331f62dcd6e": "Partial_Confirmation",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);