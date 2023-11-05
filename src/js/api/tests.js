import db from '../db/firestore'

const extractSnapshotData = snapshot =>
	snapshot.docs.map(doc => ({
		id: doc.id,
		...doc.data()
	}))

export const fetchTests = () =>
	db
		.collection('tests')
		.get()
		.then(extractSnapshotData)
