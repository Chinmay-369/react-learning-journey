import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    //Simulating API with 5 seconds delay

    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the Data...");
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name */}
        <div>
          <label>First Name: </label>
          <input
            className={`form-input ${errors.firstName ? "input-error" : ""}`}
            {...register("firstName", {
              required: "First name is required",
              minLength: { value: 3, message: "Minimum 3 characters" },
              maxLength: { value: 10, message: "Maximum 10 characters" },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters allowed",
              },
            })}
          />
          {errors.firstName && (
            <p className="error-msg">{errors.firstName.message}</p>
          )}
        </div>

        <br />

        {/* Middle Name */}
        <div>
          <label>Middle Name: </label>
          <input
            className={`form-input ${errors.middleName ? "input-error" : ""}`}
            {...register("middleName", {
              required: "Middle name is required",
              minLength: { value: 3, message: "Minimum 3 characters" },
              maxLength: { value: 15, message: "Maximum 15 characters" },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters allowed",
              },
            })}
          />
          {errors.middleName && (
            <p className="error-msg">{errors.middleName.message}</p>
          )}
        </div>

        <br />

        {/* Last Name */}
        <div>
          <label>Last Name: </label>
          <input
            className={`form-input ${errors.lastName ? "input-error" : ""}`}
            {...register("lastName", {
              required: "Last name is required",
              minLength: { value: 3, message: "Minimum 3 characters" },
              maxLength: { value: 15, message: "Maximum 15 characters" },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters allowed",
              },
            })}
          />
          {errors.lastName && (
            <p className="error-msg">{errors.lastName.message}</p>
          )}
        </div>

        <br />

        {/* Age */}
        <div>
          <label>Age: </label>
          <input
            className={`form-input ${errors.age ? "input-error" : ""}`}
            {...register("age", {
              required: "Age is required",
              min: { value: 18, message: "Age must be at least 18" },
              max: { value: 99, message: "Age must be under 100" },
              pattern: {
                value: /^[0-9]+$/,
                message: "Only numbers allowed",
              },
            })}
          />
          {errors.age && <p className="error-msg">{errors.age.message}</p>}
        </div>

        <br />

        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting" : "Submit"}
        />
      </form>
    </>
  );
}

export default App;
