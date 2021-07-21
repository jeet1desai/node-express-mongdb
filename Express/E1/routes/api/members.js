const express = require('express');
const members = require('../../Members');

const router = express.Router();

// All Members
router.get('/', (req, res) => {
    res.json(members);
});

// Get single member
router.get('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    found ?
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
        :
        res.status(400).json({ msg: `Member with id ${req.params.id} not found` })
});

// Create Members
router.post('/', (req, res) => {
    // res.send(req.body);
    // console.log(new Date().getTime().toString());
    const newMember = {
        id: parseInt(new Date().getTime().toString()),
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }

    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: 'please include name and email'});
    }
    members.push(newMember);
    res.json(members);
});

// Update Member
router.put('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        const updtMember = req.body;
        members.forEach(member=>{
            if(member.id === parseInt(req.params.id)){
                member.name = updtMember.name ? updtMember.name : member.name;
                member.email = updtMember.email ? updtMember.email : member.email;

                res.json({msg: 'Member Updated', member});
            }
        })
    }else{
        res.status(400).json({ msg: `Member with id ${req.params.id} not found` })
    }
});

// Delete Member
router.delete('/:id', (req, res) => {
    // res.send(req.params.id);
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found){
        res.json({msg: 'Member Deleted', members: members.filter(member => member.id !== parseInt(req.params.id))});
    }else{
        res.status(400).json({ msg: `Member with id ${req.params.id} not found` })
    }
});

module.exports = router;