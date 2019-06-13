const Loading = () =>
 <div>Loading ...</div>

const withLoading = (Component) => ({ isLoading, ...rest }) =>
 isLoading
  ? <Loading />
  : <Component {...rest} />

const ButtonWithLoading = withLoading(Button);

<ButtonWithLoading
 isLoading={isLoading}
 onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
>
 More
</ButtonWithLoading>