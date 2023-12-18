import LibraryForm from "./LibraryForm"


const Homepage = ({create}) => {
    return(
        <div>
            
            <h2>Welcome!</h2>
            <h3>Search our catolog</h3>
            <LibraryForm create={create}/>
            <img className="lib"
            src="https://www.cloviscollege.edu/_uploaded-files/_images/student-services/library/indexpage_library_banner_web.jpg"
            alt="library"
            />
            

        </div>
    )
}

export default Homepage