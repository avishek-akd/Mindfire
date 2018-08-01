<!---Component for database operation with project table  --->
<cfcomponent>

	<!---Insert record into Project table  --->

	<cffunction name="addProject" access = "remote" returnType="boolean" returnformat="JSON" >
		<cfset var  check = false>
		<cftry>
			<cfset teamLeaderId = form.team_leader_hidden>
			<cfquery name="insertProject" result="projectID">
				INSERT INTO [dbOrganisation].[Employee].[Project]
				(
				 [Title],
				 [Descreption],
				 [TeamLeader]
				)
				VALUES
				(
				<cfqueryparam value="#form.project_title#" cfsqltype="CF_SQL_VARCHAR">,
				<cfqueryparam value="#form.project_descreption#" cfsqltype="CF_SQL_VARCHAR">,
				<cfqueryparam value="#teamLeaderId#" cfsqltype="CF_SQL_INTEGER">
				)
			</cfquery>
			<cfquery>
				INSERT INTO [dbOrganisation].[Employee].[Emp_Project]
				(
				 [EmployeeID],
				 [ProjectID]
				)
				VALUES
				(
				<cfqueryparam value="#teamLeaderId#" cfsqltype="CF_SQL_INTEGER">,
				<cfqueryparam value="#projectID.identitycol#" cfsqltype="CF_SQL_INTEGER">
				)
			</cfquery>
			<cfset  check = true>
			<cfcatch type="database">
				<p>
					<strong>
						Apologies, a database error has occurred. Please try again later.
					</strong>
				</p>
			</cfcatch>
		</cftry>
		<cfreturn check/>
	</cffunction>

	<!---Assign project function  --->

	<cffunction name="assignProject" access = "remote" returnType="boolean" returnformat="JSON" >
		<cfargument name="projectId" type="string" required="true"/>
		<cfargument name="employeeId" type="string" required="true"/>
		<cfset var  check = false>
		<cftry>
			<cfquery>
				INSERT INTO [dbOrganisation].[Employee].[Emp_Project]
				(
				 [EmployeeID],
				 [ProjectID]
				)
				VALUES
				(
				<cfqueryparam value="#arguments.employeeId#" cfsqltype="CF_SQL_INTEGER">,
				<cfqueryparam value="#arguments.projectId#" cfsqltype="CF_SQL_INTEGER">
				)
			</cfquery>
			<cfset  check = true>
			<cfcatch type="database">
				<p>
					<strong>
						Apologies, a database error has occurred. Please try again later.
					</strong>
				</p>
			</cfcatch>
		</cftry>
		<cfreturn check/>
	</cffunction>

	<!---method for getting all project details  --->

	<cffunction name="getAllProject" returnType="query">
		<cfset rsDetails = "">
		<cftry>
			<cfquery name="rsDetails">
				SELECT p.ProjectID,p.Title,p.Descreption,(ISNULL(e.FirstName,'') +' '+ ISNULL(e.MiddleName,'') +' '+ ISNULL(e.LastName,'')) AS TeamLeader,p.ActiveStatus
				FROM [dbOrganisation].[Employee].[Project] AS p
				INNER JOIN [dbOrganisation].[Employee].[Employee] AS e
				ON p.TeamLeader=e.EmployeeID
				ORDER BY ProjectID DESC
			</cfquery>
			<cfcatch type="database">
				<p>
					<strong>
						Apologies, a database error has occurred. Please try again later.
					</strong>
				</p>
			</cfcatch>
			<cffinally>
				<cfreturn rsDetails/>
			</cffinally>
		</cftry>
	</cffunction>

	<!---method for getting all active project details   --->

	<cffunction name="getAllActiveProject" access = "remote" returnType="query" returnformat="JSON">
		<cfset rsDetails = "">
		<cftry>
			<cfquery name="rsDetails">
				SELECT ProjectID,Title
				FROM [dbOrganisation].[Employee].[Project]
				WHERE ActiveStatus=1;
			</cfquery>
			<cfcatch type="database">
				<p>
					<strong>
						Apologies, a database error has occurred. Please try again later.
					</strong>
				</p>
			</cfcatch>
			<cffinally>
				<cfreturn rsDetails/>
			</cffinally>
		</cftry>
	</cffunction>

	<!---deactivate project function --->

	<cffunction name="deactiveProject"  access = "remote" returnType="boolean" returnFormat="json">
		<cfargument name="projectId" type="string" required="true">
		<cfset var check = false>
		<cftry>
			<cfquery>
				UPDATE [dbOrganisation].[Employee].[Project]
				SET [ActiveStatus] = 0
				WHERE ProjectID= <cfqueryparam value="#arguments.projectId#" cfsqltype="CF_SQL_INTEGER">
			</cfquery>

			<cfquery>
				DELETE FROM [dbOrganisation].[Employee].[Emp_Project]
				WHERE ProjectID= <cfqueryparam value="#arguments.projectId#" cfsqltype="CF_SQL_INTEGER">
			</cfquery>

			<cfset  check = true>
			<cfcatch type="database">
				<p>
					<strong>
						Apologies, a database error has occurred. Please try again later.
					</strong>
				</p>
			</cfcatch>
			<cffinally>
				<cfreturn check/>
			</cffinally>
		</cftry>
	</cffunction>

	<!---method for getting details of a project   --->

	<cffunction name="getProjectById" access = "remote" returnType="query" returnFormat="json">
		<cfargument name="projectId" type="string" required="true">
		<cfset var rsDetails=""/>
		<cftry>
			<cfquery name="rsDetails">
				SELECT p.Title,p.Descreption,p.TeamLeader,(ISNULL(e.FirstName,'') +' '+ ISNULL(e.MiddleName,'') +' '+ ISNULL(e.LastName,'')) AS TeamLeaderName
				FROM [dbOrganisation].[Employee].[Project] AS p
				INNER JOIN [dbOrganisation].[Employee].[Employee] AS e
				ON p.TeamLeader=e.EmployeeID
				WHERE ProjectId= <cfqueryparam value="#arguments.projectId#" cfsqltype="CF_SQL_INTEGER">
			</cfquery>
			<cfcatch type="database">
				<p>
					<strong>
						Apologies, a database error has occurred. Please try again later.
					</strong>
				</p>
				<cfdump var="#cfcatch.message#">
			</cfcatch>
			<cffinally>
				<cfreturn rsDetails/>
			</cffinally>
		</cftry>
	</cffunction>

	<!---update project details   --->

	<cffunction name="editProject"  access = "remote" returnType="boolean" returnformat="JSON">
		<cfset  check = false>
		<cftry>
			<cfquery>
				UPDATE [dbOrganisation].[Employee].[Project]
				SET
				[Title] = <cfqueryparam value="#form.edit_project_title#" cfsqltype="CF_SQL_VARCHAR">,
				[Descreption] = <cfqueryparam value="#form.edit_project_descreption#" cfsqltype="CF_SQL_VARCHAR">,
				[TeamLeader] = <cfqueryparam value="#form.edit_team_leader_hidden#" cfsqltype="CF_SQL_INTEGER">
				WHERE ProjectID= <cfqueryparam value="#form.edit_projectId#" cfsqltype="CF_SQL_INTEGER">
			</cfquery>
			<cfset  check = true>
			<cfcatch type="database">
				<p>
					<strong>
						Apologies, a database error has occurred. Please try again later.
					</strong>
				</p>
			</cfcatch>
		</cftry>
		<cfreturn check/>
	</cffunction>


</cfcomponent>
