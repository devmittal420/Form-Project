import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import ProductList5 from './2. Child';

const TodoList1 = () => {
  const [productList, setProductList] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductList(data))
      .catch((err) => console.log("error", err));
  }, []);

  const handleEdit = (product) => {
    console.log("Editing product:", product);
    setEditingProduct(product);
    setDialogOpen(true);
  };

  const handleDelete = (product) => {
    const result = confirm("Do you want to delete this product");
    if (result) {
      console.log("Deleting product:", product.id);
      setProductList((prev) => prev.filter((item) => item.id !== product.id));
    }
  };

  const handleDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <ProductList5
        data={productList}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Dialog open={dialogOpen} onClose={handleDialog}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogActions>
          <Button onClick={handleDialog}>Cancel</Button>
          <Button onClick={handleDialog}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoList1;
