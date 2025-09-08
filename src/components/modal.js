// import React, { useState } from "react";
import "./modal.css";
import '../pathfindingVisualizer/navbar.css';

const MODAL_STYLES= {
    position: "fixed",
    top: '25%',
    left: '40%',
    right: '40%',
    bottom: '25%',
    width: 'auto',
    height: 'auto',
    transform: '(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba( 0, 0, 0, .7)',
    zIndex: 1000,
}

export default function Modal( { open, children, onClose }) {
    if (!open) return null

    return (
        <>
        <div style = {OVERLAY_STYLES} />
            <div style = {MODAL_STYLES}>
                <div className="modal-content">
                        <h2>What are the Pathfinding Algorithms?</h2>
                        <p>
                            Dijkstra's Algorithm - An algorithm that is used for finding the shortest distance, or path, from starting node to target node in a weighted graph.
                        </p>
                        <p>
                            A star Algorithms -  A searching algorithm that searches for the shortest path between the initial and the final state.
                        </p>
                        <p>
                            Breadth First Search -  It is an algorithm that is used to graph data or searching tree or traversing structures.
                        </p>
                        <button  onClick = {onClose}> Close</button>
                </div>
                { children }
            </div>
        </>    
    )
}