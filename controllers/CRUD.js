const DataSchema = require("../model/DataSchema");

//getting all the records
const getData = (req, res) => {
    DataSchema.find((err, data) => {
        if (err) {
          res.send(err);
        }
        res.json(data);
      });
  };


//getting specific record using name
const getUniqueRecordByName =(req,res) =>{
  DataSchema.findOne({ name: req.params.name },(err,data)=>{
    if (err){
      res.send(err)
  }
  else{
      res.json(data);
  }
  })
}
  

 //inserting new record 
const postData = (req, res) => {
    const data = new DataSchema({
        name: req.body.name,
        img: req.body.img,
        summary: req.body.summary,
    });

    data.save((err, todo) => {
        if (err) {
        res.send(err);
        }
        res.json(todo);
    });
};


//updating a record using unique id
const updateData = (req,res) =>{
    DataSchema.findOneAndUpdate(
        { _id: req.params.ID },
        {
          $set: {
            name: req.body.name,
            img: req.body.img,
            summary: req.body.summary,
          },
        },
        { new: true },
        (err, Data) => {
          if (err) {
            res.send(err);
          } else res.json(Data);
        }
      );
}


//deleting a record using unique id
const deleteData = (req,res) =>{
  DataSchema.deleteOne(
      { _id: req.params.ID })
      .then(() => res.json({ message: "Data Deleted" }))
    .catch((err) => res.send(err));
}





module.exports = {
    getData,
    postData,
    updateData,
    deleteData,
    getUniqueRecordByName,
  };
  