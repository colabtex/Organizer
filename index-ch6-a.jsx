<html>
    <body>
        <div id="app"></div>
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>


        <script type="text/jsx">
            const app = document.getElementById("app");
        

            function DotNotationHeader(props) {
                return <h1>{props.title}</h1>
            }
            
            function TemplateLiteralHeader({ title }) {
                return <h1>{`This one is a..${title}`}</h1>
            }

            {/* createTitle called in component function below */}
            function createTitle(title) {
                if (title) {
                    return title;
                } else {
                    return '(Default title, because no title was passed)';
                }
            }

            function ReturnedValueHeader({ title }) {
                return <h1>{createTitle(title)}</h1>
            }

            function TernaryOperatorHeader({ title }) {
                return <h1>{title ? title : 'Default title'}</h1>
            }


            function HomePage() {
                return (
                    <div>
                        <DotNotationHeader title="Property using dot notation" />
                        <TemplateLiteralHeader title=".. property with a template literal" />
                        <ReturnedValueHeader title="" />
                        <TernaryOperatorHeader title="(ternary evaluates true)" />
                    </div>
                )
            }

            
            
            const root = ReactDOM.createRoot(app);
            root.render(<HomePage />); 
        </script>

    </body>
</html>