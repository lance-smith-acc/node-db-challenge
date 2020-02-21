const express = require('express');

const Db = require('./project-schemes.js');

const router = express.Router();

// Gets list of all projects
router.get('/projects', (req, res) => {
  Db.getProjects()
  .then(proj => {
    res.json(proj);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// Gets list of all tasks
router.get('/tasks', (req, res) => {
  Db.getTasks()
  .then(proj => {
    res.json(proj);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// Gets list of all resources
router.get('/resources', (req, res) => {
  Db.getResources()
  .then(proj => {
    res.json(proj);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// Gets project by id
router.get('/projects/:id', (req, res) => {
  Db.getProjectById(req.params.id)
  .then(proj => {
    res.json(proj);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// Gets tasks by project id
router.get('/projects/:id/tasks', (req, res) => {
  Db.getTasksByProject(req.params.id)
  .then(proj => {
    res.json(proj);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// Gets resources by project id
router.get('/projects/:id/resources', (req, res) => {
  Db.getResourcesByProject(req.params.id)
  .then(proj => {
    res.json(proj);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects' });
  });
});

// Adds a project
router.post('/projects', (req, res) => {
  const projectData = req.body;
  Db.addProject(projectData)
    .then(proj => {
      res.status(201).json(proj)
      console.log("Successfully added project")
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to post project' });
    });
})

// Adds a task
router.post('/projects/:id/tasks', (req, res) => {
  const taskData = req.body;
  const {id} = req.params;
  Db.addTask(taskData)
    .then(task => {
      res.status(201).json(task)
      console.log("Successfully added project")
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to post project' });
    });
})

// Adds a task
router.post('/resources', (req, res) => {
  const resourceData = req.body;
  Db.addResource(resourceData)
    .then(reso => {
      res.status(201).json(reso)
      console.log("Successfully added project")
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to post project' });
    });
})

module.exports = router;