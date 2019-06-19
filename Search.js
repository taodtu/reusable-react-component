import { TextField, Button } from '@material-ui/core';


<form onSubmit={this.onSubmit} >
 <TextField name='title' defaultValue="Flower" autoFocus="true" label='Keyword' value={searchTerm} onChange={this.onChange} margin='none' />
 <span className="search" ><Button type='submit' variant="outlined" size="medium" margin='normal'> Search  </Button></span>
</form>