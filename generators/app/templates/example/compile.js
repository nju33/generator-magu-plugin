import magu from 'magu';
import <%=pluginname%> from '../dist/<%=name%>';

magu({}, [<%=pluginname%>])
  .process(`${__dirname}/example.md`)
  .then(result => {
    console.log(result.html);
  });
