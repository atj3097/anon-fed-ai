# Privacy-Preserving Federated Learning

This project implements a privacy-preserving federated learning system that enables multiple parties to collaboratively train machine learning models without sharing their raw data. We use techniques such as secure multi-party computation (SMPC) or homomorphic encryption to protect the privacy of the data while still allowing the model to learn from it.

## Features

1. Minimal web-based user interface for data upload and training initiation
2. Client module for encrypting data, training local models, and generating zk-SNARK proofs
3. Smart contract module for aggregating model updates, verifying proofs, and sharing global model
4. Communication layer for secure data transmission between clients and the smart contract
5. Blockchain integration for consensus on the choice of the machine learning model

## Technologies

- Frontend: React, HTML, CSS, JavaScript
- Backend: Node.js, Express
- Encryption: PySyft, PySEAL
- Federated Learning: TensorFlow Federated, PySyft
- zk-SNARK Proofs: libsnark, bellman, zokrates
- Blockchain: Ethereum, Smart Contracts
- Decentralized Storage: IPFS