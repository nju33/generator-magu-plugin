const defaultOpts = {
};
export {defaultOpts};

export default function anchor(opts = {}) {
  opts = Object.assign({}, defaultOpts, opts);
  return $ => {
    return $;
  };
}
