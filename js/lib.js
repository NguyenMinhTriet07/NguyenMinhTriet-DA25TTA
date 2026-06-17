const products = [

{
	id:1,
name : "Hạt giống cây thông từ Đức ",
price: "300/túi",
description: "Cây thông (đặc biệt là cây thông Noel dùng để trang trí) có nguồn gốc từ Đức",
image : "../assets/imge/caythong.webp",
link :"ctct.html"
},

{
	id:2,
name : "Hưu cao cổ ",
price: "10.000$/con",
description: "Hươu cao cổ là loài động vật có vú trên cạn cao nhất thế giới, nổi bật với chiếc cổ dài đặc trưng. Chúng sinh sống chủ yếu tại các khu vực đồng cỏ và thảo nguyên châu Phi.",
image : "../assets/imge/huu.jpg",
link :"cth.html"
},

{
id:3,
name : "Coala ",
price: "1.000$/con",
description: "Cây thông (đặc biệt là cây thông Noel dùng để trang trí) có nguồn gốc từ Đức",
image : "../assets/imge/coala.jpg",
link :"ctc.html"
},

{
id:4,
name : "Chuột túi ",
price: "5.000$/con",
description: "Kangaroo là loài động vật có vú lớn duy nhất sử dụng việc nhảy bằng hai chân làm phương thức di chuyển chính.",
image : "../assets/imge/chuot.jpg",
link :"ctt.html"
},

{
id:6,
name : " Gấu trúc ",
price: "15.000$/con",
description: "Trong tự nhiên, gấu trúc sống trên cạn và dành phân lớn thời gian để đi lang thang và ăn trong các rừng tre.",
image : "../assets/imge/gau.jpg",
link :"ctg.html"
},

{
id:7,
name : "Linh miu ",
price: " 19.000$/con",
description: "Linh miêu sinh sống trong các khu rừng nằm ở độ cao lớn với các loại cây bụi, cỏ và lau sậy rậm rạp",
image : "../assets/imge/miu.jpg",
link :"ctl.html"
}

];

function createItem(obj)
	{
		//xác định khung chưa 
		const listProducts = document.getElementById("product-list");

		//Tạo 1 container ccos class item 
		//const item = document.createElement("div");
		//item.setAttribute("class","item");


		const item = document.createElement("div");
		//item.className = "col-md-4 mb-3";
		//Tạo 2 khung chứa hình ảnh và thông tin 
		//Tạo 1 container chứa hình ảnh có class
		const containerImage = document.createElement("div");
		containerImage.setAttribute("class","image card-img-top");
		
 		//tạo ảnh		
		const img = document.createElement("img");
		img.setAttribute("src",obj.image);
		item.style.height = "520px";
		item.style.display = "flex";
		item.style.flexDirection = "column";
		
		img.style.width = "100%";
		img.style.maxWidth = "300px";
		//img.setAttribute("style","max-width:370px");
		/*img.setAttribute("class","card-body");
		img.setAttribute("class", "rounded-circle");*/
		img.className = "card-img-top rounded-circle";
		item.className = "col-12 col-md-4 mb-4";
		containerImage.style.textAlign = "center";


		//tạo ảnh
		containerImage.appendChild(img);
	
		//tạo 1 container chứa thông tin sản phẩm có class
		const containerInfo = document.createElement("div");
		containerInfo.setAttribute("class","info");

		//tạo <p> chứa tên sản phẩm	
		const nameProduct = document.createElement("p");
		nameProduct.innerHTML = obj.name;
		containerInfo.setAttribute("class","alert alert-info");
	
		//tạo <p> chứa giá sản phẩm
		const price = document.createElement("p");
		price.innerHTML = obj.price;

		//tạo <p> chứa mô tả sản phẩm
		const description = document.createElement("p");
		description.innerHTML = obj.description;
		
		//chứa liên kết
		const linkProduct = document.createElement("a");
  		linkProduct.innerHTML = ("Xem chi tiết");
  		linkProduct.href = "chitiet.html?id=" + obj.id;
		linkProduct.setAttribute("class", "btn btn-primary")
		linkProduct.style.marginTop = "auto";
		//Gắn 4 con vào khung chứa Info
		containerInfo.appendChild(nameProduct);
		containerInfo.appendChild(price);
		containerInfo.appendChild(description);
		containerInfo.appendChild(linkProduct);

		//Thêm khung chứa Image vào item
		item.appendChild(containerImage);
		item.appendChild(containerInfo);

		//Thêm Item vào list product
		listProducts.appendChild(item);
		listProducts.setAttribute("style","color:red; background-color:white;");
		listProducts.className = "row g-4";



////////////////


	item.style.transition = "0.3s";
	item.addEventListener("mouseenter", function() {
    item.style.transform = "scale(1.05)";
    
    item.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
	});

	item.addEventListener("mouseleave", function() {
    item.style.transform = "scale(1)";
    item.style.boxShadow = "none";
});
item.style.borderRadius = "15px";
item.style.overflow = "hidden";
//item.style.height = "100%";
containerInfo.style.flexGrow = "1";
containerInfo.style.display = "flex";
containerInfo.style.flexDirection = "column";
item.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";

////////////////////
item.style.border = "1px solid #742626";





		/*listProducts.style.display = "flex";
		listProducts.style.flexWrap = "wrap";
		listProducts.style.gap = "10px";
		listProducts.style.justifyContent = "center";*/
		//item.classList.add("border", "border-dark");
		}
function loadAllProducts(objArray)
{
	let i=0;
	for(i=0;i<objArray.length;i++)
{
createItem(objArray[i]);}
}