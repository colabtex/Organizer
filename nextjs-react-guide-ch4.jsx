<html>
    <body>
        <div id="app"></div>
        <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

        {/*  Method 1: using an imperative approach (not react-like)  */}
        
        {/*  <script type="text/javascript">
            const app = document.getElementById('app')
            const header = document.createElement('h1')
            const text = 'Develop. Preview. Ship.';
            const headerContent = document.createTextNode(text)
            header.appendChild(headerContent);
            app.appendChild(header);
        </script>  */}
        

        {/*  Method 2: using a declarative approach (is react-like)  */}
        <script type="text/jsx">
            const domNode = document.getElementById('app');
            const root = ReactDOM.createRoot(domNode);
            root.render(<h1>Develop. Preview. Ship.</h1>);
        </script>

        {/*  Notice the succinctness of the Method 2  */}

    </body>
</html>