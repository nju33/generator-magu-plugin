const defaultOpts = {
};
export {defaultOpts};

export default function <%=pluginname%>(opts = {}) {
  opts = Object.assign({}, defaultOpts, opts);
  return $ => {
    return $;
  };
}
