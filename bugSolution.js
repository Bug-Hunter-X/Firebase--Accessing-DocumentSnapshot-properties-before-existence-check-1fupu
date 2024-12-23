The solution involves checking `snapshot.exists` before accessing any data from the snapshot:

```javascript
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();
const docRef = doc(db, "yourCollection", "yourDocumentId");

getDoc(docRef).then((snapshot) => {
  if (snapshot.exists()) {
    console.log("Document data:", snapshot.data());
    // Access properties safely here
    const someProperty = snapshot.data().someProperty;
    console.log(someProperty);
  } else {
    console.log("Document does not exist!");
  }
}).catch((error) => {
  console.error("Error getting document:", error);
});
```
This code first verifies if the document exists using `snapshot.exists()`. Only if it exists does the code proceed to access the `data()` and its properties, preventing errors.