const Product = [
  "Jet Tempur",
  "Nuklir Hiroshima",
  "Infinity Stone",
  "Burj Khalifa",
  "Rudal Hipersonik",
];
let catalog = [
  {
    itemName: "Jet Tempur",
    amount: 10,
  },
  {
    itemName: "Nuklir Hiroshima",
    amount: 1,
  },
  {
    itemName: "Infinity Stone",
    amount: 6,
  },
  {
    itemName: "Burj Khalifa",
    amount: 5,
  },
  {
    itemName: "Rudal Hipersonik",
    amount: 3,
  },
];

let pesanan = [];

function showValues() {
  var fields = $(":input").serializeArray();
  $("#results").empty();
  jQuery.each(fields, function (i, field) {
    $("#results").append(field.value + " ");
  });
}

console.log(Object.keys(Product));

let n = 0;
const tes = () => {
  console.log(n);
  if (n < 4) {
    n++;
    var html = `<div class="row g-3 input-group mb-3" id="inputFormRow">

                        <div class="col ">
                            <select class="form-select form-control coba" onchange="tes()" id="produk" name="produk[]" >
                                <option value="">Pilih Produk</option>`;
    Product.forEach((elem) => {
      $("select").each((i, item) => {
        if (item.value == elem) {
          Product.splice(Product.indexOf(elem), 1);
          console.log(Product);
          return false;
        }
      });
    });
    Product.forEach((elem) => {
      html += `<option value="${elem}">${elem}</option>`;
    });
    html += `                       </select>
                        </div>
                        <div class="col">
                            <input type="number" name="jumlah[]" id="jumlah" class="form-control" placeholder="Kuantitas" aria-label="Kuantitas">
                        </div>
                        <div class="col">
                            <button id="removeRow" type="button" class="btn btn-danger">X</button>
                        </div>
                    </div>`;

    $("#newrow").append(html);
  }
};
const tes2 = () => {
  let data = ``;
  $("#data").empty();
  $("select").map((i, item) => {
    if (item.value == catalog[i].itemName) {
      if ($(':input[type="number"]').eq(i).val() > catalog[i].amount) {
        alert("Stok tidak mencukupi");
        return false;
      }
    }
    console.log(item.value);
    data = `<li>
                <span id="nama_produk">${item.value}</span>
                <span id="jumlah_produk">${$(':input[type="number"]')
                  .eq(i)
                  .val()}</span>
        
            </li>`;
    console.log($(':input[type="number"]').eq(i).val());

    $("#data").append(data);
  });

  let nama = $("#nama").val();
  $("h2").text(nama);
};

$(document).on("click", "#removeRow", function () {
  n--;
  console.log($("select").eq(n).val());
  Product.splice(1, 1, $("select").eq(n).val());
  console.log(n);
  console.log($(this).closest("select"));
  $(this).closest("#inputFormRow").remove();
});
