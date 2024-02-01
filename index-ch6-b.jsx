<html>
    <body>
        <div id="app"></div>
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


        <script type="text/jsx">
            const app = document.getElementById("app");
    
            {/* Iterating through lists */}

            function ListA() {
                const namesA = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
                return (
                    <div>
                        <h1>Names [A]:</h1>
                        <ul>
                            {namesA.map((name) => 
                            <li>{name}</li>
                            )}
                        </ul>
                    </div>
                )
            }

            {/* Same as above, but using best practice of using the React-specific 'key' prop (for when elements aren't unique) */}

            function ListB() {
                const namesB = ['Ada Lovelace', 'Grace Hopper', 'Grace Hopper', 'Margaret Hamilton'];
                return (
                    <div>
                        <h1>Names [B]:</h1>
                        <ul>
                            {namesB.map((name) => 
                            <li key={name}>{name}</li>
                            )}
                        </ul>
                    </div>
                )
            }

            function HomePage() {
                return (
                    <div>
                        <ListA />
                        <ListB />
                    </div>
                )
            }
            
            
            const root = ReactDOM.createRoot(app);
            root.render(<HomePage />); 
        </script>

    </body>
</html>