const AddNewItem = () => {
    const [isAddingItem, setIsAddingItem] = useState(false);
    const { dataList, setDataList } = useContext(CartContext);
    const [newItemData, setNewItemData] = useState({
      image: "",
      name: "",
      price: '',
      quantityAvailable: {
        Large: '',
        Medium: '',
        Small: '',
      },
      id: null,
      selected: {
        Large: null,
        Medium: null,
        Small: null,
      },
      totalPrice: 0,
    });
  
    const handleToggle = () => {
      setIsAddingItem(!isAddingItem);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewItemData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleQuantityChange = (e, size) => {
      const { value } = e.target;
      setNewItemData((prevData) => ({
        ...prevData,
        quantityAvailable: {
          ...prevData.quantityAvailable,
          [size]: parseInt(value),
        },
      }));
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (newItemData.name === "" || newItemData.price === "") {
        alert("Please fill in all required fields.");
        return;
      }
  
      setDataList([...dataList, newItemData]);
      setIsAddingItem(false);
      setNewItemData({
        image: "",
        name: "",
        price: 0,
        quantityAvailable: {
          Large: "",
          Medium: "",
          Small: "",
        },
        id: null,
        selected: {
          Large: null,
          Medium: null,
          Small: null,
        },
        totalPrice: 0,
      });
    };
  
    return (
      <div className="add-item">
        <button className="input-button" onClick={handleToggle}>
          {isAddingItem ? "Cancel" : "Add New Item"}
        </button>
        {isAddingItem && (
          <form className="input-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newItemData.image}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newItemData.name}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newItemData.price}
              onChange={handleInputChange}
            />
            <div>
              <h3>Quantity</h3>
              <div className="quantity">
                <input
                  type="number"
                  name="Large"
                  value={newItemData.quantityAvailable.Large}
                  onChange={(e) => handleQuantityChange(e, "Large")}
                  placeholder="Large"
                />
                <input
                  type="number"
                  name="Medium"
                  value={newItemData.quantityAvailable.Medium}
                  onChange={(e) => handleQuantityChange(e, "Medium")}
                  placeholder="Medium"
                />
                <input
                  type="number"
                  name="Small"
                  value={newItemData.quantityAvailable.Small}
                  onChange={(e) => handleQuantityChange(e, "Small")}
                  placeholder="Small"
                />
              </div>
            </div>
            <button className="input-btn">Add Item</button>
          </form>
        )}
      </div>
    );
  };
  
  export default AddNewItem;