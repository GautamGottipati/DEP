describe("Test1", function() { 

   
   it("should Return Hello world",function() { 
      expect(helloworld()).toEqual('Hello World'); 
   }); 

   it("on search",function(){
		var inputField1 = document.getElementById("inputField");
		// inputField1.value = "Javascript";	
   		spyOn(window,"creatRow");
   		getData();
   		expect(window.creatRow).toHaveBeenCalled();
   })

});