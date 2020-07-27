module.exports = middlewares => ctx => {
    const dispatch = i => {
        const fn = middlewares[i];
        if (!fn) {
            return Promise.resolve();
        }
        return Promise.resolve(fn(ctx, () => dispatch(i + 1)));
    }
    return dispatch(0)
}