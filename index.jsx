<html>
    <body>
        <div id="app"></div>
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


        <script type="text/jsx">
            const app = document.getElementById("app")
           
            function Header() {
                return <h1>Develop. Preview. Ship.</h1>;
            }      

            function HomePage() {
                return <div>
                    {/* Header component above nexted inside this HomePage component*/}
                    <Header />
                    <p>(I'm here too!)</p>
                </div>
            }

            const root = ReactDOM.createRoot(app);
            root.render(<HomePage />); 
            
        </script>

    </body>
</html>