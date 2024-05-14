import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './SplitScreen';
import { RegularList } from './RegularList';
import { SmallEmployeeListItem } from './employee/SmallEmployeeListItem';
import { LargeEmployeeListItem } from './employee/LargeEmployeeListItem';
import { Modal } from './Modal';


const LeftComponent = ({name}) =>{
  return (
    <>
      <h3 style={{backgroundColor:'red'}}>{name}</h3>
    </>
  )
}

const RightComponent = ({textMessage}) =>{
  return(
    <>
      <h3>{textMessage}</h3>
    </>
  )
}

const employee =[
  {
      name:'Moin',
      age: 28,
      designation:'React Developer',
      hobbies:['Music', 'Videos', 'Development']
  },
  {
      name:'Abdullah',
      age: 26,
      designation:'Angular Developer',
      hobbies:['Foodie', 'Hiking', 'Development']
  },
  {
      name:'Shayan',
      age: 27,
      designation:'Java Developer',
      hobbies:['Music', 'Videos', 'Exploring']
  }
]

const Products = [
  {
      productname:'Hp',
      price: '$600'
  },
  {
      productname:'Dell',
      price: '$650'
  },
  {
      productname:'Lenovo',
      price: '$500'
  },
];

function App() {
  return (
    <div className="App">
      {/* <SplitScreen leftWeight={1} rightWeight={3}>
          <LeftComponent name="Dashboard"/>
          <RightComponent textMessage="our first Admin Dashboard"/>
        </SplitScreen> */}
        {/* <RegularList items={employee} resourceName="employee" itemComponent={SmallEmployeeListItem}/>
        <RegularList items={employee} resourceName="employee" itemComponent={LargeEmployeeListItem}/> */}
        <Modal>
          <LargeEmployeeListItem employee={employee[0]}/>
        </Modal>
    </div>
  );
}

export default App;
