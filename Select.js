import { Select, MenuItem } from '@material-ui/core';

<label htmlFor="">Select Month</label>
 <Select value={date} autoWidth={true} onChange={this.handleChange}
  inputProps={{
   name: 'Month',
   id: 'month-select',
  }}>
  <MenuItem value="2019-01">2019-01</MenuItem>
  <MenuItem value="2019-02">2019-02</MenuItem>
  <MenuItem value="2019-03">2019-03</MenuItem>
  <MenuItem value="2019-04">2019-04</MenuItem>
  <MenuItem value="2019-05">2019-05</MenuItem>

 </Select>