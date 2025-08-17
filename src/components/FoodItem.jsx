import Styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={Styles.itemContainer}>
      <img className={Styles.itemImage} src={food.image} alt={food.title} />
      <div className={Styles.itemContent}>
        <p className={Styles.itemName}>{food.title}</p>
      </div>
      <div className={Styles.buttonContainer}>
        <button
          onClick={() => {
            console.log(food.id);
          }}
          className={Styles.itemButton}
          setFoodId={setFoodId}
        >
          View Recipe
        </button>
      </div>
    </div>
  );
}
