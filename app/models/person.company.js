import DS from 'ember-data';

var PersonCompany = DS.Model.extend({ 
  person: DS.belongsTo('person'), 
  company: DS.belongsTo('company'), 
  description: DS.attr('string'), 
  start: DS.attr('date'), 
  end: DS.attr('date'), 
  active: DS.attr('boolean'), 
  culture: DS.belongsTo('culture'), 
  created: DS.attr('date'), 
  updated: DS.attr('date')	
});

export default PersonCompany;