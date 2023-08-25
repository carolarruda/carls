import Nav from "./Nav"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/old.css'


const RecipeAdd = ()=> {
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [rating, setRating] = useState("");
    const [course, setCourse] = useState("");
    const [prep, setPrep] = useState("");
    const [cook, setCook] = useState("");
    const [servings, setServings] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [notes, setNotes] = useState("");
  
    const navigate = useNavigate()
  
  
  
    const handleTitle = (e) => {
      setTitle(e.target.value);
    };
  
    const handlePhoto = (e) => {
      setPhoto(e.target.value);
    };
  
    const handleRating = (e) => {
      setRating(e.target.value);
    };
  
    const handleCourse = (e) => {
      setCourse(e.target.value);
    };
  
    const handlePrep = (e) => {
      setPrep(e.target.value);
    };
  
    const handleCook = (e) => {
      setCook(e.target.value);
    };
  
    const handleServings = (e) => {
      setServings(e.target.value);
    };
  
    const handleIngredients = (e) => {
      setIngredients(e.target.value);
    };
  
    const handleInstructions = (e) => {
      setInstructions(e.target.value);
    };
  
    const handleNotes = (e) => {
      setNotes(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
    }

    const handleCancel = () => {
        navigate(-1)
      }

    return (
        <div >
            <Nav />
            
    <section className="form-container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="big-container" id="set-height">
        <form className="form-stack recipe-form" onSubmit={handleSubmit}>
          <div className="first-column">
            <div className="segment">
              <label htmlFor="recipeTitle">Recipe Title</label>
              <input
                type="text"
                value={title}
                onChange={handleTitle}
              />
            </div>
            <div className="segment">
              <label htmlFor="image">Image url</label>
              <input type="url" value={photo} onChange={handlePhoto} />
            </div>

            <div className="inline">
              <label htmlFor="rating">Star Rating</label>
              <div className="rating">
              <input
                  type="radio"
                  id="star5"
                  name="rating"
                  value="5"
                  onChange={handleRating}
                  checked={rating === "5"}
                />
                <label htmlFor="star5"></label>
                <input
                  type="radio"
                  id="star4"
                  name="rating"
                  value="4"
                  onChange={handleRating}
                  checked={rating === "4"}
                />
                <label htmlFor="star4"></label>
                <input
                  type="radio"
                  id="star3"
                  name="rating"
                  value="3"
                  onChange={handleRating}
                  checked={rating === "3"}
                />
                <label htmlFor="star3"></label>
                <input
                  type="radio"
                  id="star2"
                  name="rating"
                  value="2"
                  onChange={handleRating}
                  checked={rating === "2"}
                />
                <label htmlFor="star2"></label>
                <input
                  type="radio"
                  id="star1"
                  name="rating"
                  value="1"
                  onChange={handleRating}
                  checked={rating === "1"}
                />
                <label htmlFor="star1"></label>

  

 
              </div>
            </div>
            <div className="segment">
              <label htmlFor="courses">Course</label>
              <select
                defaultValue={"DEFAULT"}
                name="course"
                id="courses"
                style={{ fontSize: "9px" }}
                onChange={handleCourse}
              >
                <option value="DEFAULT" disabled>
                  Choose course
                </option>
                <option value="entree" checked={course === "entree"}>
                  Entree
                </option>
                <option value="main" checked={course === "main"}>
                  Main
                </option>
                <option value="dessert" checked={course === "dessert"}>
                  Dessert
                </option>
              </select>
            </div>
            <div className="segment">
              <label htmlFor="prepTime">Prep Time</label>
              <input
                type="time"
                style={{ width: "50px" }}
                onChange={handlePrep}
                value={prep}
              />
            </div>
            <div className="segment">
              <label htmlFor="cookTime">Cook Time</label>
              <input
                type="time"
                style={{ width: "50px" }}
                onChange={handleCook}
                value={cook}
              />
            </div>
            <div className="segment">
              <label htmlFor="numberServings">Servings</label>
              <input
                type="number"
                style={{ width: "50px" }}
                onChange={handleServings}
                value={servings}
              />
            </div>
          </div>

          <div className="second-column segment">
            <label htmlFor="recipeIngredients">Ingredients</label>
            <textarea
              type="text"
          
              onChange={handleIngredients}
              value={ingredients}
            />
          </div>

          <div className="third-column segment">
            <label htmlFor="recipeInstructions">Instructions</label>
            <textarea
              type="text"
              
              onChange={handleInstructions}
              value={instructions}
            />
          </div>

          <div className="fourth-column segment">
            <label htmlFor="notes">Notes</label>
            <textarea
              type="text"
             
              onChange={handleNotes}
              value={notes}
            />
          </div>
          <div className="fifth-column segment">
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </section>
        </div>
    )

}

export default RecipeAdd