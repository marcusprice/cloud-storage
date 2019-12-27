import React from 'react'
import { DirectoryContainer, DirectoryBreadcrumText, LoginTitle, DirectoryTable,
DirectoryTableRow, DirectoryTableHeader, DirectoryTableData } from './atoms'

const Directory = () => {
  return(
    <DirectoryContainer>
      <LoginTitle>Directory</LoginTitle>
      <DirectoryBreadcrumText>{"Home > Photos > Berlin 2016"}</DirectoryBreadcrumText>
      <DirectoryTable>
        <DirectoryTableRow>
          <DirectoryTableHeader>Name</DirectoryTableHeader>
          <DirectoryTableHeader>Size</DirectoryTableHeader>
          <DirectoryTableHeader>Date Created</DirectoryTableHeader>
          <DirectoryTableHeader>Date Modified</DirectoryTableHeader>
        </DirectoryTableRow>
        <DirectoryTableRow>
          <DirectoryTableData>smile.jpeg</DirectoryTableData>
          <DirectoryTableData>1.8MB</DirectoryTableData>
          <DirectoryTableData>9/15/2016</DirectoryTableData>
          <DirectoryTableData>11/20/2019</DirectoryTableData>
        </DirectoryTableRow>
      <DirectoryTableRow>
        <DirectoryTableData>berlin-wall.jpeg</DirectoryTableData>
        <DirectoryTableData>1.8MB</DirectoryTableData>
        <DirectoryTableData>9/15/2016</DirectoryTableData>
        <DirectoryTableData>12/05/2018</DirectoryTableData>
      </DirectoryTableRow>
    </DirectoryTable>
    </DirectoryContainer>
  )
}

export default Directory
