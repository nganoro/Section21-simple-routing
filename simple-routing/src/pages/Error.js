import MainNavigation from "../components/MainNavigation";

const Error = (prop) => {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An Error occured!</h1>
                <p>COuld not find this page!</p>
            </main>  
        </>
    );
};

export default Error;