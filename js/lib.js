const products = [

{
name : "Hạt giống cây thông từ Đức ",
price: "300/túi",
description: "Cây thông (đặc biệt là cây thông Noel dùng để trang trí) có nguồn gốc từ Đức",
image : "../assets/imge/caythong.webp",
link :"caythong.html"
},

{
name : "Hưu cao cổ ",
price: "10.000$/con",
description: "Hươu cao cổ là loài động vật có vú trên cạn cao nhất thế giới, nổi bật với chiếc cổ dài đặc trưng. Chúng sinh sống chủ yếu tại các khu vực đồng cỏ và thảo nguyên châu Phi.",
image : "../assets/imge/huu.jpg",
link :"caythong.html"
},

{
name : "Coala ",
price: "1.000$/con",
description: "Cây thông (đặc biệt là cây thông Noel dùng để trang trí) có nguồn gốc từ Đức",
image : "../assets/imge/coala.jpg",
link :"caythong.html"
},

{
name : "Chuột túi ",
price: "5.000$/con",
description: "Kangaroo là loài động vật có vú lớn duy nhất sử dụng việc nhảy bằng hai chân làm phương thức di chuyển chính.",
image : "../assets/imge/chuot.jpg",
link :"caythong.html"
},

{
name : " Gấu trúc ",
price: "15.000$/con",
description: "Trong tự nhiên, gấu trúc sống trên cạn và dành phân lớn thời gian để đi lang thang và ăn trong các rừng tre.",
image : "../assets/imge/gau.jpg",
link :"caythong.html"
},

{
name : "Linh miu ",
price: " 19.000$/con",
description: "Linh miêu sinh sống trong các khu rừng nằm ở độ cao lớn với các loại cây bụi, cỏ và lau sậy rậm rạp",
image : "../assets/imge/miu.jpg",
link :"caythong.html"
}

];

function createItem(obj)
	{
		//xác định khung chưa 
		const listProducts = document.getElementById("product-list");

		//Tạo 1 container ccos class item 
		//const item = document.createElement("div");
	
	//	item.setAttribute("class","item");


const item = document.createElement("div");
item.className = "col-md-4";


		//Tạo 2 khung chứa hình ảnh và thông tin 
		//Tạo 1 container chứa hình ảnh có class
		const containerImage = document.createElement("div");
		containerImage.setAttribute("class","image card-img-top");
		
 		//tạo ảnh		
		const img = document.createElement("img");
		img.setAttribute("src",obj.image);
		img.setAttribute("style","max-width:370px");
		img.setAttribute("class","card-body");
		img.setAttribute("class", "rounded-circle");
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
  		linkProduct.setAttribute("href", obj.link);
		linkProduct.setAttribute("class", "btn btn-primary")

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

		listProducts.style.display = "flex";
		listProducts.style.flexWrap = "wrap";
		listProducts.style.gap = "10px";
		listProducts.style.justifyContent = "center";
item.classList.add("border", "border-dark");
		}
function loadAllProducts(objArray)
{
	let i=0;
	for(i=0;i<objArray.length;i++)
{
createItem(objArray[i]);}
}